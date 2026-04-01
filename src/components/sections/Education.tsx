import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { education } from "@/data/education"

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Training</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A strong academic foundation spanning Ghana and the Netherlands, with specialization in natural resources and geospatial sciences, complemented by political leadership training.
          </p>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="p-4 sm:p-6 flex items-center justify-center sm:w-40 md:w-48 shrink-0">
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-32 sm:h-28 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{edu.institution}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit mt-2 sm:mt-0">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg">{edu.degree}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
