import React from 'react'

function Hero() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full filter blur-2xl animate-pulse -z-10"></div>
      <main className="flex flex-col items-center justify-center text-center px-6 py-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-2xl md:text-2xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight">
          Welcome to <br /> <span className="text-purple-300 text-4xl md:text-6xl ">VentSpace</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200 font-medium max-w-xl">
          A safe space to share your thoughts and feelings. Express yourself freely and connect with others.
        </p>
        <a
          href="/register"
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 font-semibold text-lg"
        >
          Get Started
        </a>
        <p className="mt-6 text-gray-300">
          Already have an account?{' '}
          <a href="/login" className="text-purple-200 underline hover:text-pink-200 transition-colors">
            Login
          </a>
        </p>
      </main>
    </section>
  )
}

export default Hero