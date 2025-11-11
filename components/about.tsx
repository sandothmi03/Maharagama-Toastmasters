"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Target, Award, MessageSquare, TrendingUp, Star } from "lucide-react"

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const aboutSections = [
    {
      icon: Globe,
      title: "About Toastmasters",
      content:
        "Toastmasters International is a global organization dedicated to developing communication and leadership skills through structured club meetings and the comprehensive Pathways learning experience.",
    },
    {
      icon: Users,
      title: "About Our Club",
      content:
        "Founded in Maharagama, we're part of District 82, meeting 1st and 3rd Saturdays to foster growth in a supportive environment. Our diverse community welcomes students, professionals, and anyone eager to improve.",
    },
    {
      icon: Target,
      title: "Our Members",
      content:
        "Our club brings together individuals from various backgrounds—entrepreneurs, students, teachers, and professionals—all united by the common goal of becoming better communicators and leaders.",
    },
    {
      icon: MessageSquare,
      title: "What We Do",
      content:
        "We focus on prepared speeches, constructive evaluations, impromptu speaking (Table Topics), mentoring relationships, speech contests, and community service projects that make a real difference.",
    },
  ]

  const stats = [
    { number: "25+", label: "Active Members" },
    { number: "2", label: "Meetings/Month" },
    { number: "7+", label: "Years Active" },
    { number: "50+", label: "Speeches Delivered" },
  ]

  // @ts-ignore
  return (
    <section id="about" className="py-20 bg-[#0E1217]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#772432]/20 text-[#B7A57A] border-[#772432] mb-4">About Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Building Tomorrow's
            <span className="bg-gradient-to-r from-[#B7A57A] to-[#772432] bg-clip-text text-transparent"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we transform individuals into confident speakers and effective leaders through proven
            methodologies and supportive community.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#0B1220] rounded-2xl p-6 border border-gray-700 hover:border-[#772432]/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#B7A57A] mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aboutSections.map((section, index) => (
            <Card
              key={index}
              className="bg-[#0B1220] border-gray-700 hover:border-[#772432]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#772432]/20 p-3 rounded-xl group-hover:bg-[#772432]/30 transition-colors duration-300">
                    <section.icon className="w-6 h-6 text-[#B7A57A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B7A57A] transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Activities */}
        <div className="bg-[#0B1220] rounded-3xl p-8 md:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">What Makes Us Special</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our structured approach to learning ensures every member grows at their own pace while contributing to the
              club's vibrant community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-[#772432]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#B7A57A]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Structured Learning</h4>
              <p className="text-gray-300 text-sm">
                Follow proven Pathways curriculum designed for progressive skill development
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#772432]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#B7A57A]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Personal Growth</h4>
              <p className="text-gray-300 text-sm">
                Receive constructive feedback and mentorship from experienced members
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#772432]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#B7A57A]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Recognition</h4>
              <p className="text-gray-300 text-sm">Participate in contests and earn awards for your achievements</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#772432] hover:bg-[#772432]/80 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
