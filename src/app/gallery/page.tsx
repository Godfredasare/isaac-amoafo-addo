'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import { galleryPageCategories } from "@/data/gallery"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/favicon.png" 
                alt="IA Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                Isaac<span className="text-green-600">.</span>
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore moments from my professional work, political engagement, and agricultural ventures.
            </p>
          </div>

          {/* Gallery Categories */}
          {galleryPageCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.images.map((image, imageIndex) => (
                  <Card 
                    key={imageIndex}
                    className="border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage({ 
                      src: `/gallery/${category.folder}/${image}`, 
                      alt: `${category.title} - Image ${imageIndex + 1}` 
                    })}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img
                          src={`/gallery/${category.folder}/${image}`}
                          alt={`${category.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/favicon.png" 
                alt="IA Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-bold">
                Isaac<span className="text-green-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Isaac Amoafo Addo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
