"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/toastmasters-meeting.png"
          alt="Maharagama Toastmasters Club Members"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B1220]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Meeting Badge */}
          <Badge className="bg-[#772432]/90 text-white border-[#772432] mb-6 px-4 py-2 text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Next Meeting: 1st and 3rd Saturdays 4:00 PM
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#B7A57A] via-white to-[#B7A57A] bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-white">Maharagama Toastmasters</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where leaders and communicators grow—one meeting at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-[#772432] hover:bg-[#772432]/80 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              About Us
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-[#B7A57A] text-[#B7A57A] hover:bg-[#B7A57A] hover:text-[#0B1220] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>

          {/* Guest CTA */}
          <div className="bg-[#0E1217]/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-[#B7A57A]" />
              <span className="text-[#B7A57A] font-semibold">Guest?</span>
            </div>
            <p className="text-gray-300 mb-4">
              Join us for our next meeting and experience the Toastmasters difference!
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Maharagama YMBA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#B7A57A] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#B7A57A] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
