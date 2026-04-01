import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
import { galleryCategories } from "@/data/gallery"

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into my professional work, community engagement, and agricultural ventures.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryCategories.map((category, index) => (
            <Card 
              key={index}
              className="border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  {category.images.length > 0 ? (
                    <img 
                      src={`/gallery/${category.folder}/${category.images[0]}`}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-green-400">
                      <ImageIcon className="w-12 h-12" />
                      <span className="text-sm font-medium">Images Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-all duration-300" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  {category.images.length > 0 && (
                    <Badge variant="secondary" className="mt-3 bg-green-100 text-green-700">
                      {category.images.length} photos
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/gallery">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
              View More Images
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
