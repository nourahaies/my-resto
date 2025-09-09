function SearchForm({ darkMode }) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className={`px-3 py-1 rounded-l-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          darkMode 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
        }`}
      />
      <button
        type="submit"
        className="px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </div>
  )
}

export default SearchForm