import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SpecificationsProps {
  specs: Record<string, string>;
}

export function Specifications({ specs }: SpecificationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Specifiche tecniche</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <span className="text-muted-foreground min-w-[120px]">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}