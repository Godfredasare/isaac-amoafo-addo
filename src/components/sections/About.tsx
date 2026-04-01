import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Leaf, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                  <span className="font-semibold text-gray-900">Isaac Amoafo Addo</span> is a married professional with a passion for agricultural development, sustainable resource management, and public service. His journey has taken him from the classrooms of Ghana to the international academic environment of the Netherlands.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                  Currently serving as the <span className="font-semibold text-green-600">Manager at CHED Operations</span> under Ghana COCOBOD, he brings a unique blend of technical expertise in geoinformation science and practical experience in natural resources management to drive agricultural excellence.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Beyond his professional career, he is deeply committed to serving his community and was the <span className="font-semibold text-green-600">NDC Parliamentary Candidate for Abetifi Constituency</span> in the 2024 general elections, seeking to bring positive change to his people.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="border border-green-100 bg-green-50/50 hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                <p className="text-sm text-gray-600">BSc & MSc Degrees</p>
              </CardContent>
            </Card>
            <Card className="border border-green-100 bg-green-50/50 hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
                <p className="text-sm text-gray-600">Ghana COCOBOD</p>
              </CardContent>
            </Card>
            <Card className="border border-green-100 bg-green-50/50 hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Agriculture</h3>
                <p className="text-sm text-gray-600">Multiple Ventures</p>
              </CardContent>
            </Card>
            <Card className="border border-green-100 bg-green-50/50 hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Politics</h3>
                <p className="text-sm text-gray-600">NDC Candidate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
