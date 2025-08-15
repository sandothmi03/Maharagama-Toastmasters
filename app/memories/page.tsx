"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const filters = ["All", "Meetings", "Contests", "Workshops", "Socials", "Awards", "2024", "2025"]

const memories = [
  {
    id: 1,
    src: "/COTP.jpg",
    alt: "COTP 2025 moments",
    category: "Workshops",
    date: "2025-07-13",
    caption: "Club officer training program 2025",
  },
  {
    id: 2,
    src: "/GoldenAward2025.jpg",
    alt: "Golden award winning at ovation",
    category: "Awards",
    date: "2025-05-25",
    caption: "Golden club award 2025",
  },
  {
    id: 3,
    src: "/Speechcraft2025.jpg",
    alt: "SpeechCraft Unilever 2025",
    category: "Workshops",
    date: "2025-02-10",
    caption: "SpeechCraft Unilever 2025",
  },
  {
    id: 4,
    src: "/Gathering2025.jpg",
    alt: "Club social gathering",
    category: "Socials",
    date: "2025-06-07",
    caption: "Drink and Fun",
  },
  {
    id: 5,
    src: "/JoinMeeting.jpg",
    alt: "Joint Meeting 2025",
    category: "Meetings",
    date: "2025-03-02",
    caption: "Joint meeting with Horana Toastmasters",
  },
  {
    id: 6,
    src: "/ContestWinning.jpg",
    alt: "Contest Winning",
    category: "Contests",
    date: "2025-05-04",
    caption: "Contest winning moment",
  },
  {
    id: 7,
    src: "/Gathering2024.jpg",
    alt: "Annual club dinner",
    category: "Socials",
    date: "2024-12-31",
    caption: "Annual club dinner",
  },
  {
    id: 8,
    src: "/Valentines2024.jpg",
    alt: "Valentine",
    category: "Meeting",
    date: "2024-02-14",
    caption: "Theme Meeting Valentine",
  },
  {
    id: 7,
    src: "/Valentines2024.jpg",
    alt: "Valentine2025",
    category: "Socials",
    date: "2025-02-14",
    caption: "Theme Meeting Valentine",
  },
]

export default function Memories() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof memories)[0] | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredMemories =
    activeFilter === "All"
      ? memories
      : memories.filter((memory) => memory.category === activeFilter || memory.date.includes(activeFilter))

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#B7A57A] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#B7A57A] to-white bg-clip-text text-transparent">
              Club Memories
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Capturing the moments that define our journey as communicators and leaders
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter
                    ? "bg-[#772432] hover:bg-[#772432]/80 text-white border-[#772432]"
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-[#772432]/20 hover:border-[#772432]"
                } transition-all duration-300`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMemories.map((memory) => (
              <Dialog key={memory.id}>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer bg-[#0E1217] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(memory)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={memory.src || "/placeholder.svg"}
                        alt={memory.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <Badge className="bg-[#772432] text-white mb-2">{memory.category}</Badge>
                        <p className="text-white text-sm font-medium">{memory.caption}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(memory.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl bg-[#0E1217] border-gray-700">
                  <div className="relative">
                    <Image
                      src={memory.src || "/placeholder.svg"}
                      alt={memory.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#772432] text-white">{memory.category}</Badge>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(memory.date).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-white font-medium">{memory.caption}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredMemories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No memories found for the selected filter.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
