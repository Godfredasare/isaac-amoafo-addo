import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
        </div>
        <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-green-100 p-3 sm:p-4 rounded-xl shrink-0">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Manager at CHED Operations</h3>
                  <Badge className="bg-green-600 text-white w-fit mt-2 sm:mt-0">Current Position</Badge>
                </div>
                <p className="text-gray-500 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Ghana COCOBOD
                </p>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Serving as a key leader in the Cocoa Health and Extension Division (CHED) Operations, contributing to Ghana's cocoa industry development and supporting farmers across the nation.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                      <span>Overseeing operational activities and strategic initiatives for cocoa extension services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                      <span>Implementing programs to improve cocoa productivity and farmer livelihoods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                      <span>Applying geoinformation science expertise for resource management and planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                      <span>Collaborating with stakeholders to enhance agricultural development in Ghana</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
