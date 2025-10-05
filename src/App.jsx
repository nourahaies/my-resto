import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import './App.css'
import { Card } from './components/Card'

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

function App() {
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

  // const meals ={
  //   image :"https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
  //   title : "Pizza Margherita",
  //   description :"Fresh mozzarella, tomato sauce, and basil leaves on a crispy thin crust. A classic Italian favorite that never disappoints with its simple yet perfect combination of flavors.",
  //   price : "14.99$"
  // }

  // هون رح نخزن الوجبات
  const [meals, setMeals] = useState([])

  const [menu,setMenu]=useState('Our Menu')
  // Fetch 6 random meals when the component mounts
  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const randomMeals = []
        // Fetch 8 random meals by making 6 separate API calls
        for (let i = 0; i < 8; i++) {
          const response = await fetch(`${API_BASE_URL}/random.php`)
          const data = await response.json()
          if (data.meals && data.meals[0]) {
            randomMeals.push(data.meals[0])
          }
        }
        setMeals(randomMeals)
      } catch (error) {
        console.error('Error fetching random meals:', error)
      }
    }

    fetchRandomMeals()
  }, [])

  // دالة البحث
  const handleSearch = async (query) => {
    if (!query) {
      // If search is empty, fetch random meals and reset to "Our Menu"
      try {
        const randomMeals = []
        for (let i = 0; i < 8; i++) {
          const response = await fetch(`${API_BASE_URL}/random.php`)
          const data = await response.json()
          if (data.meals && data.meals[0]) {
            randomMeals.push(data.meals[0])
          }
        }
        setMeals(randomMeals)
        setMenu('Our Menu')
      } catch (error) {
        console.error('Error fetching random meals:', error)
      }
      return
    }
    
    const url = `${API_BASE_URL}/search.php?s=${query}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMenu(`search results for "${query}"`)
        setMeals(data.meals|[]) 
      })
      .catch((err) => console.error('Error:', err))
  }
  
  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="container mx-auto px-4">
        <h1 className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {menu}
        </h1>
        
        {/* Meal Cards */}
        <div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <Card
                key={meal.idMeal}
                darkMode={darkMode}
                meal={meal}
              />
            ))
          ) : (
            <div className={`col-span-full text-center py-8 ${
              darkMode ? 'text-white' : 'text-gray-600'
            }`}>
              <p className="text-lg mb-2">Loading delicious meals...</p>
              <div className="animate-pulse">
                <div className={`h-4 rounded w-32 mx-auto ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default App


/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */