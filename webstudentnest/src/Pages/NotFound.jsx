import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center">
        
        <h1 className="text-9xl font-black text-indigo-600 animate-bounce">
          404
        </h1>

        
        <div className="relative flex justify-center items-center py-4">
          <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
     Sorry, page not found
        </h2>
        
        
        <p className="mt-6 text-lg leading-7 text-gray-600 max-w-md mx-auto">
         It looks like you've taken a wrong turn, or the page you're looking for has been moved or deleted
        </p>

        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 transform hover:scale-105"
          >
           back home
          </Link>
          
        
        </div>
      </div>

      {/* لمسة فنية خلفية (اختياري) */}
      <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl opacity-20 pointer-events-none">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
      </div>
    </div>
  );
}