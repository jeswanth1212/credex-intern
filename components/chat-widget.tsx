"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"

// This is a placeholder for the actual AI implementation
// In a real app, you would use the OpenAI API or another LLM provider
const mockAIResponse = async (message: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const responses: Record<string, string> = {
    hello: "Hello! How can I help you with selling your software licenses today?",
    "how do i sell my license":
      "To sell your license, simply fill out the contact form with your license details. Our team will evaluate it and get back to you within 24 hours with a valuation.",
    "what types of licenses":
      "We accept various software licenses including Microsoft, Adobe, AutoCAD, Oracle, SAP, Salesforce, and many more. If you're unsure, just ask us!",
    "how long does it take":
      "Our process is quick! You'll receive a valuation within 24 hours and payment within 48 hours after accepting our offer.",
    "is it secure":
      "We use end-to-end encryption for all communications and secure payment processing for all transactions.",
    "how much can i get":
      "The value depends on the license type, remaining validity, and current market demand. We guarantee competitive rates and will provide you with the best possible valuation.",
  }

  // Simple keyword matching
  const lowerMessage = message.toLowerCase()
  let response =
    "I'm not sure how to answer that. Could you try asking about how to sell licenses, what types we accept, our process timeline, or security measures?"

  for (const [keyword, reply] of Object.entries(responses)) {
    if (lowerMessage.includes(keyword)) {
      response = reply
      break
    }
  }

  return response
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can I help you with selling your software licenses today?", isUser: false },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Example questions to help users get started
  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "Is the process secure?",
    "How much can I get for my licenses?",
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setInput("")
    setIsLoading(true)

    try {
      // In a real app, you would replace this with an actual API call
      // For example: const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: userMessage }) })
      const aiResponse = await mockAIResponse(userMessage)
      setMessages((prev) => [...prev, { text: aiResponse, isUser: false }])
    } catch (error) {
      console.error("Error getting AI response:", error)
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I'm having trouble connecting. Please try again later.", isUser: false },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleExampleClick = (question: string) => {
    setInput(question)
    handleSend()
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-lg"
          size="icon"
          aria-label="Open chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-lg border bg-background shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-600">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">SoftSell Assistant</h3>
                  <p className="text-xs text-gray-500">Ask me anything about selling licenses</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[85%] ${
                        message.isUser
                          ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-gray-100 px-4 py-2 dark:bg-gray-800">
                      <div className="flex space-x-1">
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-600"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-600"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-600"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Example questions - show only if there are few messages */}
              {messages.length < 3 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-500">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleExampleClick(question)}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                {/* Note: In a real app, you would replace this with your actual API info */}
                <span className="opacity-75">To use your own OpenAI API key, update the .env file</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
