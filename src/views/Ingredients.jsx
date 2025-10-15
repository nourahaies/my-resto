import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Component for individual ingredient card
function IngredientCard({ ingredient, darkMode, onIngredientClick }) {
  const ingredientImageUrl = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`
  
  return (
    <div className={`max-w-sm mx-auto rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full cursor-pointer hover:shadow-lg transform hover:scale-105 transition-transform ${
      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
    }`}
    onClick={() => onIngredientClick(ingredient.strIngredient)}
    >
      {/* Image */}
      <div className="flex justify-center items-center p-4 bg-gray-50 dark:bg-gray-700">
        <img 
          src={ingredientImageUrl} 
          alt={ingredient.strIngredient}
          className="w-24 h-24 object-contain"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/96x96?text=No+Image'
          }}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className={`text-xl font-semibold mb-2 text-center ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {ingredient.strIngredient}
        </h2>
        {ingredient.strDescription && (
          <p className={`text-sm leading-relaxed mb-4 flex-grow text-center ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {ingredient.strDescription.slice(0, 150)}...
          </p>
        )}
        <div className="flex items-center justify-center mt-auto">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            View Recipes
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Ingredients() {
  const navigate = useNavigate()
  
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

  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch ingredients when component mounts
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`${API_BASE_URL}/list.php?i=list`)
        const data = await response.json()
        
        if (data.meals) {
          // Take only first 20 ingredients to avoid overwhelming the UI
          setIngredients(data.meals.slice(0, 20))
        } else {
          setError('No ingredients found')
        }
      } catch (err) {
        console.error('Error fetching ingredients:', err)
        setError('Failed to load ingredients. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [])

  // Simple search functionality (placeholder for future enhancement)
  const handleSearch = (query) => {
    console.log('Search for ingredients:', query)
    // This can be enhanced later to filter ingredients
  }

  // Handle ingredient click to navigate to meals page
  const handleIngredientClick = (ingredientName) => {
    navigate(`/meals/${encodeURIComponent(ingredientName)}`)
  }

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="container mx-auto px-4">
        <h1 className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Ingredients
        </h1>
        
        {/* Loading State */}
        {loading && (
          <div className={`text-center py-8 ${
            darkMode ? 'text-white' : 'text-gray-600'
          }`}>
            <p className="text-lg mb-4">Loading ingredients...</p>
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
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}
        
        {/* Ingredients Grid */}
        {!loading && !error && (
          <div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <IngredientCard
                  key={ingredient.strIngredient || index}
                  ingredient={ingredient}
                  darkMode={darkMode}
                  onIngredientClick={handleIngredientClick}
                />
              ))
            ) : (
              <div className={`col-span-full text-center py-8 ${
                darkMode ? 'text-white' : 'text-gray-600'
              }`}>
                <p className="text-lg">No ingredients found.</p>
              </div>
            )}
          </div>
        )}
        
        {/* Info Text */}
        {!loading && !error && ingredients.length > 0 && (
          <div className={`text-center mt-12 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-sm">
              Showing {ingredients.length} ingredients. Click "View Recipes" to see meals using each ingredient.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
