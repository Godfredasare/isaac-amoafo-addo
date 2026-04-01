import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, ExternalLink } from "lucide-react"
import { socialMedia } from "@/data/socialMedia"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for business opportunities, political engagement, or any inquiries.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border border-gray-100 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href="mailto:isaacamoafoaddo@gmail.com"
                      className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                    >
                      isaacamoafoaddo@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium text-gray-900">Ghana, West Africa</p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4 text-center">Connect with me on social media</p>
                  <div className="flex justify-center gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gray-100 p-4 rounded-full transition-all duration-300 hover:text-white ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <a
                    href="mailto:isaacamoafoaddo@gmail.com"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
