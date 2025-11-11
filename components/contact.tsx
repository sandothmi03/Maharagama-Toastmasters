"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, Facebook, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "toastmastersclubmaharagama@gmail.com",
      href: "mailto:toastmastersclubmaharagama@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@maharagama_toastmasters",
      href: "https://www.instagram.com/maharagamatoastmastersclub?igsh=djdlNW8zN3RxaHAz&utm_source=qr",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "facebook.com/maharagamatm",
      href: "https://www.facebook.com/share/1CSLNXK8cM/?mibextid=wwXIfr",
    },
    {
      icon: Phone,
      label: "President - Shamilka Ranasinghe",
      value: "+94 77 389 9272",
      href: "tel:+94 77 389 9272",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#0B1220]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#772432]/20 text-[#B7A57A] border-[#772432] mb-4">Contact Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#B7A57A] to-[#772432] bg-clip-text text-transparent">
            Join Us?
          </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards becoming a confident speaker and effective leader. We're here to help you begin
            your journey.
          </p>
        </div>

        {/* 2 x 2 contact tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, i) => (
              <Card
                  key={i}
                  className="bg-[#0E1217] border-gray-700 hover:border-[#772432]/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <a
                      href={info.href}
                      className="flex items-center gap-4 group-hover:text-[#B7A57A] transition-colors duration-300"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-[#772432]/20 p-3 rounded-xl group-hover:bg-[#772432]/30 transition-colors">
                      <info.icon className="w-5 h-5 text-[#B7A57A]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-white font-medium break-all">{info.value}</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
          ))}
        </div>

        {/* Long horizontal meeting details tile */}
        <Card className="bg-[#0E1217] border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#B7A57A]" />
              Meeting Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B7A57A]" />
              <div>
                <div className="text-white font-medium">1st and 3rd Saturdays</div>
                <div className="text-gray-400 text-sm">4:00 PM – 6:00 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#B7A57A] mt-1" />
              <div>
                <div className="text-white font-medium">Maharagama YMBA</div>
                <div className="text-gray-400 text-sm">
                  No: 25, Bauddha Manadira Pedesa, Vidyakara Mawatha
                  <br />
                  Maharagama, Sri Lanka
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
