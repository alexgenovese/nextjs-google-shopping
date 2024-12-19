import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { PriceOption } from '../../types/product';

interface PriceComparisonProps {
  options: PriceOption[];
}

export function PriceComparison({ options }: PriceComparisonProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Opzioni di acquisto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">€{option.price.toFixed(2)}</span>
                {option.isPromotion && option.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    €{option.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Consegna a €{option.shipping.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">{option.store}</p>
            </div>
            <Button variant="secondary">
              Visita il sito
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}