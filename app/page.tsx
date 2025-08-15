import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
