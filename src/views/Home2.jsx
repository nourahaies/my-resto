// import React from 'react'
// import { useState, useEffect } from 'react'
// import MainLayout from '../layouts/MainLayout'
// import { Card } from '../components/Card'

// const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

// export default function Home() {
//   // Initialize dark mode from localStorage or default to false
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedDarkMode = localStorage.getItem('darkMode')
//     return savedDarkMode ? JSON.parse(savedDarkMode) : false
//   })

//   // Save dark mode preference to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode))
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//   }


//   // 🍕 Recipes
//    const [recipes, setRecipes] = useState([])
//   const [menuTitle, setMenuTitle] = useState('Featured Recipes')
//   const [loading, setLoading] = useState(true)

//   // 📥 Fetch recipes
//   const fetchRecipes = async () => {
//     try {
//       setLoading(true)
//       const res = await fetch(`${API_BASE_URL}/recipes/index`)
//       const data = await res.json()
//       setRecipes(data.data || [])
//     } catch (error) {
//       console.error('Error fetching recipes:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchRecipes()
//   }, [])

//   // دالة البحث
 
  
//   return (
//  <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} >
//       <div className="container mx-auto px-4">
//         <h1 className={`text-3xl font-bold text-center mb-8 ${
//           darkMode ? 'text-white' : 'text-gray-800'
//         }`}>
//           {menuTitle}
//         </h1>
        
//         {/* recipes Cards */}
//         <div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
//           {recipes.length > 0 ? (
//             recipes.map((recipe) => (
//               <Card
//                 key={recipe.id}
//                 darkMode={darkMode}
//                 recipe={recipe}
//               />
//             ))
//           ) : (
//             <div className={`col-span-full text-center py-8 ${
//               darkMode ? 'text-white' : 'text-gray-600'
//             }`}>
//               <p className="text-lg mb-4">Loading delicious recipes...</p>
//               <div className="flex justify-center">
//                 <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
//                   darkMode ? 'border-white' : 'border-gray-900'
//                 }`}></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout> 
//      )
// }

import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Card } from '../components/Card'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    return savedDarkMode ? JSON.parse(savedDarkMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  // 🍕 Recipes
  const [allRecipes, setAllRecipes] = useState([]) // كل الوصفات
  const [recipes, setRecipes] = useState([])       // الوصفات المعروضة
  const [menuTitle, setMenuTitle] = useState('Featured Recipes')
  const [loading, setLoading] = useState(true)

  // 📥 Fetch all recipes
  const fetchRecipes = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE_URL}/recipes/index`)
      const data = await res.json()
      const loaded = data.data || []
      setAllRecipes(loaded)
      setRecipes(loaded)
      setMenuTitle('Featured Recipes')
    } catch (error) {
      console.error('Error fetching recipes:', error)
    } finally {
      setLoading(false)
    }
  }

  // 🔍 Search on front-end
  const handleSearch = (query) => {
    if (!query.trim()) {
      setRecipes(allRecipes)
      setMenuTitle('Featured Recipes')
      return
    }

    const filtered = allRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(query.toLowerCase())
    )

    setRecipes(filtered)
    setMenuTitle(`Search results for "${query}"`)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="container mx-auto px-4">
        <h1
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          {menuTitle}
        </h1>

        {/* Recipes Grid */}
        <div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {loading ? (
            <div
              className={`col-span-full text-center py-8 ${
                darkMode ? 'text-white' : 'text-gray-600'
              }`}
            >
              <p className="text-lg mb-4">Loading delicious recipes...</p>
              <div className="flex justify-center">
                <div
                  className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
                    darkMode ? 'border-white' : 'border-gray-900'
                  }`}
                ></div>
              </div>
            </div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Card key={recipe.id} darkMode={darkMode} recipe={recipe} />
            ))
          ) : (
            <div
              className={`col-span-full text-center py-8 ${
                darkMode ? 'text-white' : 'text-gray-600'
              }`}
            >
              No recipes found 🍽️
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
