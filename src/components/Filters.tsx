import React from 'react';
import { ChevronDown } from 'lucide-react';

const filters = [
  { name: 'Department', options: ['Electronics', 'Clothing', 'Home', 'Books'] },
  { name: 'Price', options: ['Under $25', '$25-$50', '$50-$100', 'Over $100'] },
  { name: 'Brand', options: ['Apple', 'Samsung', 'Sony', 'LG'] },
  { name: 'Rating', options: ['4★ & up', '3★ & up', '2★ & up'] },
];

export function Filters() {
  return (
    <div className="space-y-6">
      {filters.map((filter) => (
        <div key={filter.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">{filter.name}</h3>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="space-y-1">
            {filter.options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <input type="checkbox" className="rounded text-blue-500" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}