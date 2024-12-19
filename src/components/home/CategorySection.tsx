import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductGrid } from './ProductGrid';
import type { Product } from '@/types/product';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export function CategorySection({ title, products }: CategorySectionProps) {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <ProductGrid products={products} />
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Mostra altri ▼
          </button>
        </div>
      </div>
    </section>
  );
}