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
            src="https://lh3.googleusercontent.com/spp/AFLdkbE9sX-lv1mcIy38Gq-ulv7k3wvL8UShD0tvF41Mg6b3ULdDAeFebfmt318KggO_ebNTDgaIxvAeDCfrxV8y9D5OMkDwLkphXAfTu35MzSAdRwA9vagUIJ7_P-DMMe5B7sy3dMjngEx8sHfCTgtF9vEAmKJ-o1eukp46uTEz=w1024-h337-rw-pc0x00ffffff"
            alt="Banner promozionale"
            className="w-full h-auto object-cover rounded-lg mb-8"
          />
        </div>

        <CategorySection title="Elettronica" products={electronicProducts} />
        <CategorySection title="Decorazioni per la casa" products={homeDecorProducts} />
      </main>
    </div>
  );
}