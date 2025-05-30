import React from 'react'
import { ShoppingBag } from 'lucide-react'

export default function Fotter() {
  return (
    <div>
         {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LUXECART</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your premium destination for luxury shopping and exclusive collections.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                    <div className="w-5 h-5 bg-current"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <ul className="space-y-3">
                {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty'].map((category) => (
                  <li key={category}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{category}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">📧 support@luxecart.com</li>
                <li className="text-gray-400">📞 +1 (555) 123-4567</li>
                <li className="text-gray-400">🕒 Mon-Fri 9AM-6PM EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 LuxeCart. All rights reserved. Made with ❤️ for premium shopping experience.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
