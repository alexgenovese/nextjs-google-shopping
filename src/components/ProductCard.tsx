import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
  store: string;
  freeShipping?: boolean;
}

export function ProductCard({ title, price, rating, image, store, freeShipping }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart className="w-5 h-5" />
      </Button>
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
            {freeShipping && (
              <span className="text-xs text-green-600">Free shipping</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">from {store}</p>
        </div>
      </CardFooter>
    </Card>
  );
}