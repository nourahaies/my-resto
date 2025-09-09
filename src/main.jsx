import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createElement } from 'react'
// import reactImg2 from './assets/react.svg'


// const name='Noura';
// const items = ['item1','item2','item3']

// const heading = createElement('h1',{},'Hello Noura!')

// const heading2 = <div>
// <>
// <img src={reactImg2}/>
// <h1>then</h1>
// <h2>THENNN {name}</h2>
// <h3>meow</h3>
// </>

// <ul>
//   {items.map((item,index) =>(
//     <li key={index}>the {item}</li>
//   ))}
// </ul>
// </div>

// createRoot(document.getElementById('root')).render([heading,heading2])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)