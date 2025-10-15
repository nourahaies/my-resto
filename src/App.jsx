import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home2 from './views/Home2'
import Ingredients from './views/Ingredients'
import About from './views/About'
import MealsByIngredient from './views/MealsByIngredient'

//const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

function App() {
  
  
  return (
    <Routes>
      <Route path="/" element={<Home2/>}   />
      <Route path="/ingredients" element={<Ingredients/>}   />
      <Route path="/about" element={<About/>}   />
      <Route path="/meals/:ingredient" element={<MealsByIngredient/>}   />
    </Routes>
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