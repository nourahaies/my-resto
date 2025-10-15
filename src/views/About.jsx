import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function About() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleSearch = (query) => {
    console.log('Search query:', query)
  }

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Restoranto
          </h1>
          
          <div className={`rounded-lg shadow-md p-8 mb-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Our Story
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Welcome to Restoranto, where culinary passion meets exceptional dining experience. 
              Founded with a vision to bring together the finest ingredients and traditional cooking 
              methods, we create memorable meals that celebrate the art of gastronomy.
            </p>
            
            <h2 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Our Mission
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              At Restoranto, we're committed to providing an extraordinary dining experience that 
              combines fresh, locally-sourced ingredients with innovative culinary techniques. 
              Our mission is to create a warm, welcoming atmosphere where food lovers can explore 
              new flavors and enjoy quality time with family and friends.
            </p>
            
            <h2 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              What Makes Us Special
            </h2>
            <ul className={`list-disc list-inside space-y-3 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <li>Fresh, locally-sourced ingredients</li>
              <li>Traditional cooking methods with modern twists</li>
              <li>Extensive menu featuring diverse cuisines</li>
              <li>Warm and welcoming atmosphere</li>
              <li>Commitment to exceptional customer service</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
