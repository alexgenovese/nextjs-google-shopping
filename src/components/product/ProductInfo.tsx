import React from 'react';
import { Star, Share2, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
}

export function ProductInfo({ title, rating, reviewCount, description, features }: ProductInfoProps) {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-start space-y-0">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
        </div>

        <Separator />

        <div className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}