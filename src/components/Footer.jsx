function Footer({ darkMode }) {
  return (
    <footer className={`mt-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-t`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Restaurant
            </h3>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience the finest Italian cuisine in a warm and welcoming atmosphere. 
              Our chefs use only the freshest ingredients to create authentic dishes.
            </p>
            <div className={`${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p className="mb-2">📍 123 Main Street, City, State 12345</p>
              <p className="mb-2">📞 (555) 123-4567</p>
              <p>✉️ info@restaurant.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Hours
            </h4>
            <div className={`space-y-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={`mt-8 pt-8 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © 2024 Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social Media Icons */}
              <a href="#" className={`transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className={`transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className={`transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.984C3.467 0 0 3.467 0 7.984v4.032C0 16.533 3.467 20 7.984 20h4.032C16.533 20 20 16.533 20 12.016V7.984C20 3.467 16.533 0 12.017 0zm1.417 6.67c.3 0 .542.243.542.542v6.67c0 .3-.243.542-.542.542H6.67c-.3 0-.542-.243-.542-.542v-6.67c0-.3.243-.542.542-.542h6.67zm-3.317 8.33a5.33 5.33 0 110-10.66 5.33 5.33 0 010 10.66z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer