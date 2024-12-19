import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Help & Settings': ['Your Account', 'Shipping & Delivery', 'Returns', 'Size Guide', 'Help Center'],
    'About Us': ['About Our Company', 'Careers', 'Press Center', 'Sustainability', 'Affiliate Program'],
    'Connect with Us': ['Contact Us', 'Store Locator', 'Gift Cards', 'Student Discount', 'Blog'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility', 'Site Map'],
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}