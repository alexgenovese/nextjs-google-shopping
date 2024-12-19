import React from 'react';
import { Card, CardContent } from "@/components/ui/card"

interface ProductGalleryProps {
  mainImage: string;
  title: string;
}

export function ProductGallery({ mainImage, title }: ProductGalleryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="aspect-square w-full max-w-xl mx-auto">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
}