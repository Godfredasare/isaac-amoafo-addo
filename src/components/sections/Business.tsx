import { Card, CardContent } from "@/components/ui/card"
import { businessInterests } from "@/data/business"

export default function Business() {
  return (
    <section id="business" className="py-16 sm:py-20 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Business Interests</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Diversified entrepreneurial ventures contributing to Ghana's agricultural sector and economy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessInterests.map((business, index) => (
            <Card 
              key={index}
              className="border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <business.icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.title}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <ul className="space-y-2">
                  {business.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
