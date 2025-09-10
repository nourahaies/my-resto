export function Card({ darkMode,meal }) {
  return (
    <div className={`max-w-sm mx-auto rounded-lg shadow-md overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Image */}
      <img 
        src={meal.strMealThumb} 
        alt="Delicious Pizza"
        className="w-full h-48 object-cover"
      />
      
      {/* Card Content */}
      <div className="p-6">
        <h2 className={`text-xl font-semibold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {meal.strMeal}
        </h2>
        <p className={`text-sm leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {meal.strInstructions?.slice(0, 100)}...
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">14.99$</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
