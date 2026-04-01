import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Gallery from "@/components/sections/Gallery"
import Business from "@/components/sections/Business"
import Politics from "@/components/sections/Politics"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Gallery />
        <Business />
        <Politics />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
