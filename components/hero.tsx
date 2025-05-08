"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import MicrosoftLogo from '../public/logos/microsoft.svg'
import AdobeLogo from '../public/logos/adobe.svg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Turn Unused Software Licenses Into Cash
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                SoftSell helps businesses monetize their unused software licenses quickly, securely, and at the best
                market rates.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* Microsoft Logo */}
                    <span className="sr-only">Microsoft</span>
                    <svg viewBox="0 0 96 96" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="a" x1="-1032.17" x2="-1059.21" y1="145.31" y2="65.43" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#114a8b"/>
                          <stop offset="1" stopColor="#0669bc"/>
                        </linearGradient>
                        <linearGradient id="b" x1="-1023.73" x2="-1029.98" y1="108.08" y2="105.97" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopOpacity=".3"/>
                          <stop offset=".07" stopOpacity=".2"/>
                          <stop offset=".32" stopOpacity=".1"/>
                          <stop offset=".62" stopOpacity=".05"/>
                          <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="c" x1="-1027.16" x2="-997.48" y1="147.64" y2="68.56" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#3ccbf4"/>
                          <stop offset="1" stopColor="#2892df"/>
                        </linearGradient>
                      </defs>
                      <path fill="url(#a)" d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"/>
                      <path fill="#0078d4" d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"/>
                      <path fill="url(#b)" d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"/>
                      <path fill="url(#c)" d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"/>
                    </svg>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* Adobe Logo */}
                    <span className="sr-only">Adobe</span>
                    <svg width="24" height="21" viewBox="0 0 91 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_906_1839)">
                        <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000"/>
                        <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000"/>
                        <path d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z" fill="#EB1000"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_906_1839">
                          <rect width="90.4318" height="80" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* SAP Logo */}
                    <span className="sr-only">SAP</span>
                    <svg viewBox="0 0 256 259" width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/>
                      <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-2 text-gray-500 dark:text-gray-400">
                  <span className="font-medium">500+</span> businesses trust us
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-yellow-500">★★★★★</div>
                <div className="ml-1 text-gray-500 dark:text-gray-400">
                  <span className="font-medium">4.9/5</span> rating
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[420px] w-full max-w-[500px] rounded-xl bg-gradient-to-br from-teal-300 to-emerald-400 dark:from-teal-900/50 dark:to-emerald-900/50 p-6 shadow-lg backdrop-blur-sm border border-teal-200">
              {/* Window Header */}
              <div className="absolute top-6 left-6 right-6 h-9 rounded-lg bg-gray-900/90 dark:bg-gray-800/90 flex items-center px-3">
                <div className="flex space-x-1.5 mr-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-medium text-white">Software License Manager</div>
              </div>
              
              {/* Main Content Area */}
              <div className="absolute top-[3.75rem] left-6 right-6 bottom-6 rounded-lg bg-gray-900/90 dark:bg-gray-800/90 p-4 overflow-hidden">
                <div className="flex flex-col h-full space-y-4">
                  {/* Title Section */}
                  <div className="h-8 rounded-md bg-teal-500/20 dark:bg-teal-700/20 flex items-center px-3">
                    <span className="text-xs font-medium text-teal-50">Available Licenses</span>
                  </div>

                  {/* License Items */}
                  <div className="space-y-2.5 flex-1">
                    <div className="p-3 rounded-lg bg-teal-500/10 dark:bg-teal-700/20 border border-teal-500/20">
                      <div className="text-xs text-teal-100/70">Microsoft Office 365</div>
                      <div className="text-sm font-semibold text-teal-50 mt-0.5">12 Enterprise Licenses</div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-teal-500/10 dark:bg-teal-700/20 border border-teal-500/20">
                      <div className="text-xs text-teal-100/70">Adobe Creative Cloud</div>
                      <div className="text-sm font-semibold text-teal-50 mt-0.5">8 Team Licenses</div>
                    </div>
                  </div>

                  {/* Value Section */}
                  <div className="p-3 rounded-lg bg-emerald-500/20 dark:bg-emerald-700/20 border border-emerald-500/20">
                    <div className="text-xs text-emerald-100/70">Estimated Value</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">$12,450</div>
                    <div className="text-[10px] text-emerald-100/60 mt-0.5">Based on current market rates</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 px-3 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-xs font-medium text-teal-50 transition-colors">
                      View Details
                    </button>
                    <button className="py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-xs font-medium text-white transition-colors">
                      Sell Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

