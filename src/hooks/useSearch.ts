import { useState, useEffect } from 'react';
import type { Product } from '@/types/product';
import { electronicProducts, homeDecorProducts } from '@/data/homeProducts';

// Fallback to local search when Supabase is not configured
export function useSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Local search implementation
    const allProducts = [...electronicProducts, ...homeDecorProducts];
    const searchResults = allProducts.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.store.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults);
    setIsLoading(false);
  }, [query]);

  return { results, isLoading };
}