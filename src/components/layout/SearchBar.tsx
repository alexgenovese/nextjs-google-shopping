import React, { useState, useEffect } from 'react';
import { Search, Mic, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const { results, isLoading } = useSearch(debouncedQuery);

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <div className="flex items-center bg-white rounded-full border shadow-sm hover:shadow-md transition-shadow">
        <Search className="w-5 h-5 text-gray-400 ml-4" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Che cosa stai cercando?"
          className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        {isLoading ? (
          <Loader2 className="w-5 h-5 text-gray-500 mr-4 animate-spin" />
        ) : (
          <button className="p-2 hover:bg-gray-100 rounded-full mr-2">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>

      {results.length > 0 && query && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border p-2 max-h-96 overflow-y-auto">
          {results.map((product) => (
            <div
              key={product.id}
              className="p-2 hover:bg-gray-50 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">{product.title}</h4>
                  <p className="text-sm text-gray-600">
                    {product.price.toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}