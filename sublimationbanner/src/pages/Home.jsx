import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Elements (Subtle Ink Splashes) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Dye-Sublimation Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
              Colors that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                Never Fade.
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Experience photo-realistic clarity with our premium sublimation banners. 
              Ink infused directly into the fabric for a finish that is washable, scratch-resistant, and incredibly vibrant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-300/50 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
                Create Your Banner
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Watch Process
              </button>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                <p className="font-bold text-slate-900 text-lg">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Polyester</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                <p className="font-bold text-slate-900 text-lg">HD</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Resolution</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                <p className="font-bold text-slate-900 text-lg">24h</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Turnaround</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual (Hanging Banner Mockup) */}
          <div className="relative flex justify-center perspective-1000">
            {/* The Banner visual */}
            <div className="relative w-80 md:w-96 h-[500px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-2xl flex flex-col transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out border-t-8 border-slate-800">
              
              {/* Grommets / Hanging string */}
              <div className="absolute -top-16 left-0 right-0 h-16 flex justify-center">
                 <div className="w-1 h-full bg-slate-400"></div>
              </div>
              <div className="absolute top-2 left-4 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-400 shadow-inner"></div>
              <div className="absolute top-2 right-4 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-400 shadow-inner"></div>

              {/* Banner Content Area */}
              <div className="flex-1 bg-white m-2 overflow-hidden relative group">
                 {/* This represents the printed design */}
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-3xl font-bold uppercase tracking-widest border-4 border-white p-4">
                      Grand<br/>Opening
                    </h3>
                    <p className="mt-4 font-medium opacity-90">High Quality Prints</p>
                 </div>

                 {/* Fabric Texture Overlay */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] opacity-30 mix-blend-multiply"></div>
              </div>
            </div>

            {/* Shadow beneath the banner */}
            <div className="absolute bottom-[-40px] w-64 h-8 bg-black/20 blur-xl rounded-[100%]"></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home