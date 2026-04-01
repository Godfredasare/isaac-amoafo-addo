import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Politics() {
  return (
    <section id="politics" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Political Involvement</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
        </div>
        <Card className="border-2 border-green-600 bg-gradient-to-br from-green-50 to-white shadow-lg overflow-hidden">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-green-100">
                  <img 
                    src="/ndc-logo.png" 
                    alt="NDC Logo" 
                    width={120} 
                    height={120}
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-green-600">NDC</h3>
                  <p className="text-gray-600 text-sm sm:text-base">National Democratic Congress</p>
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <Badge className="bg-green-600 text-white mb-4">2024 General Elections</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Parliamentary Candidate
                </h3>
                <h4 className="text-xl sm:text-2xl text-green-600 font-semibold mb-4">
                  Abetifi Constituency
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Standing as the NDC Parliamentary Candidate for Abetifi Constituency in the 2024 general elections, with a commitment to bringing development, empowering communities, and ensuring the voices of the people are heard at the highest levels of governance.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Badge variant="outline" className="border-green-600 text-green-700 py-1.5">
                    Community Development
                  </Badge>
                  <Badge variant="outline" className="border-green-600 text-green-700 py-1.5">
                    Youth Empowerment
                  </Badge>
                  <Badge variant="outline" className="border-green-600 text-green-700 py-1.5">
                    Agricultural Reform
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
