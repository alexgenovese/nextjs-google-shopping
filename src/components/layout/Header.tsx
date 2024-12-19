import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Store
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <Home className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}