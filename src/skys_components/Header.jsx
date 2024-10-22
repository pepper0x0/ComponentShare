import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-yellow-300">C</span>
          <span className="text-green-300">S</span>
          <span className="text-blue-300">❤️</span>
        </motion.h1>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {[
                { name: 'Home', path: '/' },
                { name: 'Landing Pages', path: '/landing-pages' },
                { name: 'Login/SignUp Pages', path: '/loginpages' },
                { name: 'Headers', path: '/headers' },
                { name: 'Footers', path: '/footers' },
                { name: 'Buttons', path: '/buttons' },
                { name: 'Cards', path: '/cards' },
            ].map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-full transition duration-300 ease-in-out relative
                    ${isActive 
                      ? 'bg-white text-indigo-600 font-semibold' 
                      : 'text-white opacity-80 hover:opacity-100'
                    }
                    group`
                  }
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:flex space-x-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="px-6 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600">
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="px-6 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider bg-yellow-400 text-indigo-800 hover:bg-yellow-300">
              Sign Up
            </Link>
          </motion.div>
        </div>

        <motion.button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Landing Pages', path: '/landing-pages' },
                { name: 'Login/SignUp Pages', path: '/loginpages' },
                { name: 'Headers', path: '/headers' },
                { name: 'Footers', path: '/footers' },
                { name: 'Buttons', path: '/buttons' },
                { name: 'Cards', path: '/cards' }
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-full transition duration-300 ease-in-out relative
                      ${isActive 
                        ? 'bg-white text-indigo-600 font-semibold' 
                        : 'text-white opacity-80 hover:opacity-100'
                      }
                      group`
                    }
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </NavLink>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="block text-center px-6 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600">
                  Login
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signup" className="block text-center px-6 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider bg-yellow-400 text-indigo-800 hover:bg-yellow-300">
                  Sign Up
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
