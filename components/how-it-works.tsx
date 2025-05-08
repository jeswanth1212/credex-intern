"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
      icon: <Upload className="h-10 w-10" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Get Valuation",
      description: "Our experts analyze the market and provide you with the best possible valuation.",
      icon: <DollarSign className="h-10 w-10" />,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method within 48 hours.",
      icon: <CreditCard className="h-10 w-10" />,
      color: "from-teal-600 to-emerald-700",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-900">Simple Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our streamlined process makes selling your unused software licenses quick and hassle-free.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white`}
              >
                {step.icon}
              </div>
              <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 md:block">
                {index < steps.length - 1 && <div className="h-0.5 w-12 bg-gray-200 dark:bg-gray-700"></div>}
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
