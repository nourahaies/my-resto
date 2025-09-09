import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import './App.css'
import { Card } from './components/Card'

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

  const meals ={
    image :"https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
    title : "Pizza Margherita",
    description :"Fresh mozzarella, tomato sauce, and basil leaves on a crispy thin crust. A classic Italian favorite that never disappoints with its simple yet perfect combination of flavors.",
    price : "14.99$"
  }

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <div className="container mx-auto px-4">
        <h1 className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Our Restaurant Menu
        </h1>
        
        {/* Meal Card */}
        <Card darkMode={darkMode} props={meals} />
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