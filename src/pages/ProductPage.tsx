import React from 'react';
import { Header } from '@/components/layout/Header';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { PriceComparison } from '../components/product/PriceComparison';
import { Specifications } from '../components/product/Specifications';
import { RelatedProducts } from '../components/product/RelatedProducts';
import { Footer } from '../components/Footer';
import { relatedProducts } from '../data/relatedProducts';
import type { Product, PriceOption } from '../types/product';

const product: Product = {
  id: 1,
  title: "Amazon - Echo Pop",
  price: 19.99,
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc",
  store: "Amazon",
  description: "Musica e Alexa, la combinazione perfetta. Scegli il colore che più si addice al tuo stile, trova il punto migliore dove posizionare Echo Pop e riproduci la canzone perfetta per ogni momento.",
  features: [
    "Musica e Alexa, la combinazione perfetta",
    "Sempre le note giuste",
    "\"Alexa, riproduci la mia canzone preferita.\"",
    "Alexa è qui per aiutarti",
    "Preparati ad affrontare la giornata con le informazioni sul meteo e le ultime notizie"
  ],
  specifications: {
    "Tipo": "Altoparlanti smart",
    "Audio": "Con audio surround",
    "Connettività": "Wireless",
    "Portabilità": "Portatile",
    "Assistente": "Amazon Alexa",
    "Display": "Schermo integrato",
    "Controllo": "Controllo vocale",
    "Bluetooth": "Sì",
    "Wi-Fi": "Sì"
  }
};

const priceOptions: PriceOption[] = [
  {
    store: "Unieuro",
    price: 19.99,
    shipping: 2.99,
  },
  {
    store: "Amazon.it",
    price: 19.00,
    shipping: 3.99,
  },
  {
    store: "MediaWorld",
    price: 19.00,
    shipping: 4.99,
    isPromotion: true,
    originalPrice: 54.99,
  }
];

export function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductGallery mainImage={product.image} title={product.title} />
            <div className="space-y-6">
              <ProductInfo
                title={product.title}
                rating={product.rating}
                reviewCount={126}
                description={product.description}
                features={product.features}
              />
              <PriceComparison options={priceOptions} />
            </div>
          </div>
          <Specifications specs={product.specifications} />
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}