import React from 'react';
import { Search, Camera, Mic } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="flex items-center bg-white rounded-full border shadow-sm hover:shadow-md transition-shadow">
        <Search className="w-5 h-5 text-gray-400 ml-4" />
        <input
          type="text"
          placeholder="Search for products"
          className="w-full py-3 px-4 outline-none rounded-full"
        />
        <div className="flex items-center gap-2 px-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Camera className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}