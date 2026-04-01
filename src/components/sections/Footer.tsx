import { Mail } from "lucide-react"
import { socialMedia } from "@/data/socialMedia"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-6">
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
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Isaac Amoafo Addo. All rights reserved.
          </p>
          <a
            href="mailto:isaacamoafoaddo@gmail.com"
            className="text-green-500 hover:text-green-400 transition-colors text-sm flex items-center gap-1"
          >
            <Mail className="w-4 h-4" />
            isaacamoafoaddo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
