import React from 'react';
import { Header } from '@/components/layout/Header';
import { SearchBar } from '@/components/layout/SearchBar';
import { CategorySection } from '@/components/home/CategorySection';
import { electronicProducts, homeDecorProducts } from '@/data/homeProducts';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container py-4">
          <SearchBar />
        </div>
      </div>

      <main>
        <div className="container py-8">
          <img
            src="./banner.webp"
            alt="Banner promozionale"
            className="w-full max-w-2xl mx-auto h-auto object-cover rounded-lg mb-8"
          />
        </div>

        <CategorySection title="Elettronica" products={electronicProducts} />
        <CategorySection title="Decorazioni per la casa" products={homeDecorProducts} />
      </main>
    </div>
  );
}