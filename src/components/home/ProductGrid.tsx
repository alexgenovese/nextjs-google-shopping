import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from '@/components/ui/star-rating';
import type { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <Link key={product.id} to="/product" className="group">
          <Card className="h-full">
            <CardContent className="p-4">
              <div className="aspect-square mb-2 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-muted-foreground">
                    {product.reviewCount}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold">
                    {product.price.toFixed(2)} €
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice.toFixed(2)} €
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}