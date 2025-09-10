import React, { useState, useEffect, useRef } from "react";

function SearchForm({ search,setSearch, handleSearch, darkMode }) {

  const inputRef = useRef(null)


  useEffect(()=>{
    if (inputRef.current)
      inputRef.current.focus()
  },[])

  const onSearch = (event) => {
    event.preventDefault();
    //const query = event.target.elements.search.value;
    //console.log("Submit query:", query);
    handleSearch(search);
  };

  return (
    <form onSubmit={onSearch} className="flex items-center">
      <input
        type="text"
        name="search"
        ref={inputRef}
        value={search}
        placeholder="Search..."
        onInput={(e) => {
          console.log("Typing query:", e.target.value);
          setSearch(e.target.value);
        }}
        className={`px-3 py-1 rounded-l-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
        }`}
      />
      <button
        type="submit"
        className="px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
