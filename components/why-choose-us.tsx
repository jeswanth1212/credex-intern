"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, Award } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing for all license transfers.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 48 hours of accepting an offer.",
      icon: <Clock className="h-10 w-10" />,
    },
    {
      title: "Best Market Rates",
      description: "Our extensive network ensures you get the highest possible value for your licenses.",
      icon: <DollarSign className="h-10 w-10" />,
    },
    {
      title: "Compliance Guaranteed",
      description: "All transfers are legally compliant with software licensing regulations.",
      icon: <Award className="h-10 w-10" />,
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-900">
              Our Advantages
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              SoftSell offers unmatched benefits when it comes to selling your unused software licenses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                {feature.icon}
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
