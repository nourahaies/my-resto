import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Component for individual meal card
function MealCard({ meal, darkMode }) {
  return (
    <div className={`w-full max-w-sm mx-auto rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full min-h-[420px] ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Image */}
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'
        }}
      />
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className={`text-xl font-semibold mb-2 break-words overflow-wrap-anywhere hyphens-auto ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {meal.strMeal}
        </h2>
        
        {meal.strCategory && (
          <p className={`text-sm mb-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Category: {meal.strCategory}
          </p>
        )}
        
        {meal.strArea && (
          <p className={`text-sm mb-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Cuisine: {meal.strArea}
          </p>
        )}
        
        {/* Meal Description */}
        {meal.strInstructions && (
          <p className={`text-sm leading-relaxed mb-4 flex-grow ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {meal.strInstructions.slice(0, 150)}...
          </p>
        )}
        
        <div className="flex items-center justify-end mt-auto">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MealsByIngredient() {
  const { ingredient } = useParams()
  
  // Initialize dark mode from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    return savedDarkMode ? JSON.parse(savedDarkMode) : false
  })

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch meals by ingredient when component mounts or ingredient changes
  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      if (!ingredient) return
      
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`${API_BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`)
        const data = await response.json()
        
        if (data.meals) {
          setMeals(data.meals)
        } else {
          setError(`No meals found with ingredient: ${ingredient}`)
          setMeals([])
        }
      } catch (err) {
        console.error('Error fetching meals by ingredient:', err)
        setError('Failed to load meals. Please try again later.')
        setMeals([])
      } finally {
        setLoading(false)
      }
    }

    fetchMealsByIngredient()
  }, [ingredient])

  // Search functionality (placeholder for future enhancement)
  const handleSearch = (query) => {
    console.log('Search for meals:', query)
    // This can be enhanced later to filter meals
  }

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="container mx-auto px-4">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link 
            to="/ingredients" 
            className={`inline-flex items-center mb-4 text-indigo-600 hover:text-indigo-800 transition-colors ${
              darkMode ? 'text-indigo-400 hover:text-indigo-300' : ''
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Ingredients
          </Link>
          
          <h1 className={`text-3xl font-bold text-center ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Meals with {ingredient}
          </h1>
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className={`text-center py-8 ${
            darkMode ? 'text-white' : 'text-gray-600'
          }`}>
            <p className="text-lg mb-4">Loading meals...</p>
            <div className="flex justify-center">
              <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
                darkMode ? 'border-white' : 'border-gray-900'
              }`}></div>
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className={`text-center py-8 ${
            darkMode ? 'text-red-400' : 'text-red-600'
          }`}>
            <p className="text-lg">{error}</p>
            <Link 
              to="/ingredients"
              className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Back to Ingredients
            </Link>
          </div>
        )}
        
        {/* Meals Grid */}
        {!loading && !error && meals.length > 0 && (
          <div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
            {meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
        
        {/* No meals found */}
        {!loading && !error && meals.length === 0 && (
          <div className={`text-center py-8 ${
            darkMode ? 'text-white' : 'text-gray-600'
          }`}>
            <p className="text-lg mb-4">No meals found with this ingredient.</p>
            <Link 
              to="/ingredients"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Back to Ingredients
            </Link>
          </div>
        )}
        
        {/* Info Text */}
        {!loading && !error && meals.length > 0 && (
          <div className={`text-center mt-12 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-sm">
              Found {meals.length} meals containing {ingredient}. Click "View Recipe" to see full details.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}