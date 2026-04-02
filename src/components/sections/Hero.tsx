import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Leaf, Briefcase, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-green-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-4">
              <Badge className="border-green-600 text-green-700 bg-green-50 px-4 py-1.5 text-sm font-medium">
                Manager at CHED Operations - Ghana COCOBOD
              </Badge>
            </div>

            {/* ✅ MAIN SEO H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 text-gray-900">
              Isaac Amoafo Addo
            </h1>

            {/* ✅ Secondary heading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl text-green-600 font-medium mb-4">
              COCOBOD Manager • Agricultural Development Expert • Entrepreneur
            </h2>

            {/* ✅ SEO-Optimized Description */}
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Isaac Amoafo Addo (also known as Isaac Amoako Addo) is a Manager
              at CHED Operations, Ghana COCOBOD. He is an agricultural
              development expert, entrepreneur, and public service professional
              focused on sustainable resource management in Ghana.
            </p>

            {/* ✅ Hidden SEO reinforcement */}
            <p className="sr-only">
              Isaac Amoafo Addo is also known as Isaac Amoako Addo, a Ghanaian
              agricultural development expert and Manager at CHED Operations,
              Ghana COCOBOD.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="bg-green-600 text-white px-5 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
              >
                Get in Touch
              </a>

              <a
                href="#about"
                className="border-2 border-green-600 text-green-600 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-green-50 transition-all text-center text-sm sm:text-base"
              >
                Learn More
              </a>

              <a
                href="https://docs.google.com/document/d/1FQSKZm-kxtpgAQPQ-foTrxcehKTZWG51/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-all text-center text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600" />
                <span className="text-sm">isaacamoafoaddo@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm">Ghana</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-2xl">
                {/* ✅ SEO-optimized image */}
                <img
                  src="/profile.jpeg"
                  alt="Isaac Amoafo Addo - COCOBOD Manager and Agricultural Development Expert"
                  title="Isaac Amoafo Addo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 bg-green-50 rounded-full blur-3xl opacity-60" />

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-green-100">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>

              <div className="absolute bottom-8 -left-4 bg-white rounded-full p-3 shadow-lg border border-green-100">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
