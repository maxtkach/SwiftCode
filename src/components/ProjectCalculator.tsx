'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CalculatorStep {
  title: string
  description: string
  options: {
    label: string
    value: number
    description: string
  }[]
}

const calculatorSteps: CalculatorStep[] = [
  {
    title: "Project Type",
    description: "What type of project would you like to build?",
    options: [
      { label: "Landing Page", value: 5000, description: "Single-page website with contact form" },
      { label: "Web Application", value: 15000, description: "Full-featured web application with user accounts" },
      { label: "Mobile App", value: 25000, description: "Cross-platform mobile application" },
      { label: "E-commerce Platform", value: 20000, description: "Online store with payment integration" }
    ]
  },
  {
    title: "Features",
    description: "Select the features you need for your project",
    options: [
      { label: "User Authentication", value: 2000, description: "User registration and login system" },
      { label: "Payment Integration", value: 3000, description: "Payment gateway integration (Stripe, PayPal)" },
      { label: "Admin Dashboard", value: 4000, description: "Admin panel for content management" },
      { label: "API Integration", value: 2500, description: "Integration with third-party services" },
      { label: "Search Functionality", value: 1500, description: "Advanced search and filtering" },
      { label: "Analytics", value: 1000, description: "Analytics and reporting tools" }
    ]
  },
  {
    title: "Design Requirements",
    description: "What level of design do you need?",
    options: [
      { label: "Basic Design", value: 2000, description: "Simple, clean design with standard components" },
      { label: "Custom Design", value: 5000, description: "Unique design with custom components" },
      { label: "Premium Design", value: 8000, description: "High-end design with animations and interactions" }
    ]
  }
]

export default function ProjectCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleOptionSelect = (value: number) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[currentStep] = value
    setSelectedOptions(newSelectedOptions)
  }

  const calculateTotal = () => {
    return selectedOptions.reduce((sum, value) => sum + value, 0)
  }

  const handleNext = () => {
    if (currentStep < calculatorSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setSelectedOptions([])
    setShowResult(false)
  }

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-primary mb-6">Estimated Project Cost</h3>
        <div className="text-4xl font-bold text-accent mb-6">
          ${calculateTotal().toLocaleString()}
        </div>
        <p className="text-text/70 mb-8">
          This is an estimated cost based on your selections. The final price may vary depending on specific requirements and complexity.
        </p>
        <button
          onClick={handleReset}
          className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
        >
          Start Over
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-text/60">Step {currentStep + 1} of {calculatorSteps.length}</span>
          <span className="text-sm text-text/60">
            {Math.round(((currentStep + 1) / calculatorSteps.length) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-background rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / calculatorSteps.length) * 100}%` }}
            className="h-full bg-primary"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-primary mb-2">
        {calculatorSteps[currentStep].title}
      </h3>
      <p className="text-text/70 mb-8">
        {calculatorSteps[currentStep].description}
      </p>

      <div className="space-y-4 mb-8">
        {calculatorSteps[currentStep].options.map((option, index) => (
          <motion.button
            key={option.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleOptionSelect(option.value)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
              selectedOptions[currentStep] === option.value
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-primary">{option.label}</span>
              <span className="text-accent font-medium">${option.value.toLocaleString()}</span>
            </div>
            <p className="text-sm text-text/70">{option.description}</p>
          </motion.button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-background text-text hover:bg-primary/10'
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedOptions[currentStep] === undefined}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            selectedOptions[currentStep] === undefined
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {currentStep === calculatorSteps.length - 1 ? 'Calculate' : 'Next'}
        </button>
      </div>
    </motion.div>
  )
} 