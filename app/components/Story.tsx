import { Play } from 'lucide-react'
import React, { useState } from 'react'
import {
    Sparkles,
    Moon,
    Award,
  } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card'

const Story = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  return (
    <>
     <section id="story" className="py-24 luxury-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow-gold">The Story of Light</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Born from the first ray of dawn breaking through crystal, Lumière captures the essence of illumination
              itself. Each bottle holds not just fragrance, but a moment of pure radiance— crafted by master perfumers
              in the heart of Grasse, where tradition meets innovation.
            </p>

            {/* Video Section */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden glass-effect hover-lift cursor-pointer">
                <video
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                  controls
                  src="/pefumse.mp4"
                  autoPlay
                  loop
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Master Crafted",
                  description: "Created by renowned perfumer Jean-Claude Ellena",
                },
                {
                  icon: Sparkles,
                  title: "Rare Ingredients",
                  description: "Sourced from the finest gardens worldwide",
                },
                {
                  icon: Moon,
                  title: "Timeless Elegance",
                  description: "A fragrance that transcends seasons and trends",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-black/50 border-gray-800 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 gold-gradient rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Story