import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Premium Quality Fabric
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Custom Flags <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Made to Wave.
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Elevate your branding with high-resolution, weather-resistant custom flags. 
            From corporate events to national pride, we print your vision on the finest materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:-translate-y-1">
              Start Designing
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition">
              View Catalog
            </button>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="pt-8 border-t border-gray-100 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              HD Printing
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Waterproof
            </div>
          </div>
        </div>

        {/* Right Side: Visual/Image Placeholder */}
        <div className="relative group">
          {/* Decorative blurry background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Main Image Container */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-100 h-96 w-full flex items-center justify-center transform rotate-2 hover:rotate-0 transition duration-500 ease-out">
            {/* TIP: Replace the gradient div below with an actual <img> tag for your flag product.
              Example: <img src="/flag-hero.jpg" alt="Custom Flag" className="object-cover w-full h-full" /> 
            */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 10V3a2 2 0 012-2h6a2 2 0 012 2v7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a2 2 0 012-2h2a2 2 0 012 2" /> 
                {/* Simulated Flag Icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 22v-7" />
              </svg>
              <h3 className="text-2xl font-bold">Your Design Here</h3>
              <p className="text-indigo-100 mt-2">Upload your artwork to preview</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home