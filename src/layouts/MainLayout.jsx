import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MainLayout({ children, darkMode, toggleDarkMode , handleSearch}) {

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch} />
      
      {/* Main Content */}
      <div className={`py-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        {children}
      </div>
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainLayout