import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Shapes (Abstract Ink Blots) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">
              Custom Gifts & Apparel
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Print Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
                Imagination.
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform ordinary items into extraordinary memories. 
              From custom mugs and t-shirts to phone cases and keychains—if you can picture it, we can print it.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                No Minimum Order
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                Full Color HD
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                Dishwasher Safe
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Shop Products
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition shadow-sm">
                Upload Design
              </button>
            </div>
          </div>

          {/* Right Visual: Floating Mockups Composition */}
          <div className="relative h-96 w-full flex items-center justify-center">
             
             {/* Circular Backdrop */}
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-fuchsia-100 rounded-full scale-90 lg:scale-100 blur-md opacity-60"></div>

             {/* Floating T-Shirt (CSS/SVG) */}
             <div className="absolute z-20 transform -rotate-12 hover:rotate-0 transition duration-500 -translate-x-12">
                <div className="relative w-48 h-56 bg-white rounded-xl shadow-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                   {/* Shirt Neck */}
                   <div className="absolute top-0 w-24 h-4 bg-gray-100 rounded-b-full"></div>
                   {/* Design on Shirt */}
                   <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-90"></div>
                   <div className="absolute bottom-2 text-[10px] text-gray-400 font-mono">T-SHIRT</div>
                </div>
             </div>

             {/* Floating Mug (CSS/SVG) */}
             <div className="absolute z-30 transform rotate-6 hover:rotate-0 transition duration-500 translate-x-12 translate-y-8">
                <div className="relative w-40 h-44 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-100">
                   {/* Mug Handle */}
                   <div className="absolute -right-6 top-8 w-8 h-20 border-4 border-white bg-gray-50 rounded-r-xl shadow-md -z-10"></div>
                   
                   {/* Design on Mug */}
                   <div className="w-full h-24 bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-90 flex items-center justify-center text-white font-bold text-lg">
                      MOM
                   </div>
                   <div className="absolute bottom-2 text-[10px] text-gray-400 font-mono">11oz MUG</div>
                </div>
             </div>

              {/* Floating Badge */}
             <div className="absolute z-40 top-0 right-10 animate-bounce">
               <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white">
                 Best Seller
               </div>
             </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home