import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Main Hero Section */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Decorative Background blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Welcome to the Future of <br />
            <span className="text-blue-600">Event Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the easiest way to organize, track, and celebrate your events. 
            Join thousands of users making their moments memorable.
          </p>
        </div>
      </main>
      
    </div>
  );
};

export default Home;