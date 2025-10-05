export function Card({ darkMode, meal }) {
  return (
    <div className={`max-w-sm mx-auto rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Image */}
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        className="w-full h-48 object-cover flex-shrink-0"
      />
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className={`text-xl font-semibold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {meal.strMeal}
        </h2>
        <p className={`text-sm leading-relaxed mb-4 flex-grow ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {meal.strInstructions?.slice(0, 120)}...
        </p>
        <div className="flex items-center justify-end mt-auto">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}


         /** <span className="text-2xl font-bold text-green-600">$14.99</span> */ 
