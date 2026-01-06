import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambience (Neon Glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Product Copy */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <span className="bg-lime-500 text-black text-xs font-bold px-2 py-1 rounded">NEW</span>
              <span className="text-lime-400 font-mono tracking-widest text-sm uppercase">Performance Series</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">
              UNLIMIT <br />
              YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500">STYLE.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-4 border-lime-500 pl-6">
              Full-body "All-Over" printing. Zero texture feel. 
              Our dye-sublimated jerseys are moisture-wicking, fade-resistant, and ready for the game.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
              <div>
                <h4 className="font-bold text-white text-lg">Drifit</h4>
                <p className="text-sm text-gray-500">Micro-interlock fabric</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">∞ Colors</h4>
                <p className="text-sm text-gray-500">Photo-realistic prints</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Unisex</h4>
                <p className="text-sm text-gray-500">Sizes XS to 5XL</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-8 py-4 bg-lime-500 text-black font-bold text-lg rounded transform skew-x-[-10deg] hover:bg-lime-400 hover:scale-105 transition duration-200">
                <span className="block transform skew-x-[10deg]">Start Designing</span>
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold text-lg rounded transform skew-x-[-10deg] hover:border-white hover:bg-white hover:text-black transition duration-200">
                <span className="block transform skew-x-[10deg]">Team Quotes</span>
              </button>
            </div>
          </div>

          {/* Right Side: Visual (Jersey Mockup) */}
          <div className="relative flex justify-center items-center h-[500px]">
             
             {/* Back Glow behind Jersey */}
             <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50 rounded-full blur-3xl scale-75"></div>

             {/* CSS/SVG Jersey Representation */}
             <div className="relative w-80 h-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition duration-500 ease-in-out">
                
                {/* SVG Jersey Shape */}
                <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="jerseyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#84cc16" /> {/* Lime */}
                      <stop offset="50%" stopColor="#0ea5e9" /> {/* Sky Blue */}
                      <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                    </linearGradient>
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" className="text-white opacity-20" fill="currentColor" />
                    </pattern>
                  </defs>
                  
                  {/* The Jersey Path */}
                  <path 
                    d="M378,112 L342,40 L170,40 L134,112 L40,140 L70,220 L134,200 L134,472 L378,472 L378,200 L442,220 L472,140 L378,112 Z" 
                    fill="url(#jerseyGradient)" 
                    stroke="none"
                  />
                  
                  {/* Pattern Overlay on Jersey (Simulating texture) */}
                  <path 
                    d="M378,112 L342,40 L170,40 L134,112 L40,140 L70,220 L134,200 L134,472 L378,472 L378,200 L442,220 L472,140 L378,112 Z" 
                    fill="url(#pattern-circles)" 
                  />

                  {/* Collar Detail */}
                  <path d="M170,40 Q256,90 342,40" fill="none" stroke="#18181b" strokeWidth="8"/>
                  
                  {/* Sleeve Cuffs */}
                  <path d="M40,140 L70,220" stroke="#18181b" strokeWidth="10" strokeLinecap="square"/>
                  <path d="M472,140 L442,220" stroke="#18181b" strokeWidth="10" strokeLinecap="square"/>
                  
                  {/* Logo / Text on Chest */}
                  <text x="50%" y="220" textAnchor="middle" fill="white" fontSize="60" fontWeight="900" fontStyle="italic" style={{textShadow: "2px 2px 0px #000"}}>
                    RAPTORS
                  </text>
                  <text x="50%" y="320" textAnchor="middle" fill="white" fontSize="120" fontWeight="900" style={{textShadow: "4px 4px 0px #000", opacity: 0.9}}>
                    01
                  </text>
                </svg>

                {/* Floating "Tag" element */}
                <div className="absolute top-0 -right-10 bg-white text-black font-bold p-3 rounded-lg shadow-lg rotate-12">
                   $15.00 <span className="text-xs font-normal text-gray-500 block">Starting at</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home