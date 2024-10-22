import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const stats = [
    { icon: "👥", value: "1+", label: "Contributors" },
    { icon: "🧩", value: "5+", label: "Components" },
    { icon: "⚡", value: "24h", label: "Avg. Update Time" },
    { icon: "💰", value: "Free", label: "Open Source" },
  ]

  const categories = [
    { title: "Landing Pages", count: 1 },
    { title: "Buttons", count: 2 },
    { title: "Headers/Navbars", count: 1 },
    { title: "Footers", count: 1 },
    { title: "Login/SignUp Pages", count: 1 },
    { title: "Cards", count: 1 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Share, Discover, and Collaborate</h2>
          <p className="text-xl text-blue-100 mb-8">Join our community of developers to showcase your work and find inspiration.</p>
          <Link to="/explore" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-100 transition-colors inline-block">Explore Components</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white bg-opacity-30 rounded-lg p-4">
                <div className="font-semibold text-white">{category.title}</div>
                <div className="text-sm text-blue-100">{category.count} components</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
