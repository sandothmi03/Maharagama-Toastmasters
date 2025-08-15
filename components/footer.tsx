"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Memories", href: "/memories" },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/maharagamatoastmastersclub?igsh=djdlNW8zN3RxaHAz&utm_source=qr",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CSLNXK8cM/?mibextid=wwXIfr",
      icon: Facebook,
    },
    {
      name: "Email",
      href: "mailto:toastmastersclubmaharagama@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-[#0E1217] border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#772432] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TM</span>
              </div>
              <span className="text-white font-semibold text-lg">Maharagama Toastmasters</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Building confident speakers and effective leaders through structured learning, constructive feedback, and
              supportive community engagement.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Maharagama YMBA, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="text-gray-300 hover:text-[#B7A57A] transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#B7A57A] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#B7A57A] transition-colors duration-300 group"
                >
                  <div className="bg-[#772432]/20 p-2 rounded-lg group-hover:bg-[#772432]/30 transition-colors duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Maharagama Toastmasters Club. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Part of Toastmasters International District 82</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
