import React from 'react'
import { Heart, Droplets, Wind} from "lucide-react"

interface Note {
    name: string
    description: string
    intensity: number
    category: "top" | "heart" | "base"
}

const fragranceNotes: Note[] = [
    {
        name: "Bergamot",
        description: "Bright citrus opening with sparkling freshness",
        intensity: 85,
        category: "top",
    },
    {
        name: "Pink Pepper",
        description: "Delicate spice with effervescent warmth",
        intensity: 70,
        category: "top",
    },
    {
        name: "Rose Petals",
        description: "Velvety Bulgarian rose in full bloom",
        intensity: 90,
        category: "heart",
    },
    {
        name: "Jasmine",
        description: "Intoxicating white flowers under moonlight",
        intensity: 80,
        category: "heart",
    },
    {
        name: "Sandalwood",
        description: "Creamy, meditative wood from sacred groves",
        intensity: 95,
        category: "base",
    },
    {
        name: "Vanilla",
        description: "Madagascar vanilla pods with golden warmth",
        intensity: 75,
        category: "base",
    },
]


const Fragrance = () => {
    return (
        <>
            <section id="notes" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow-gold">Fragrance Notes</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A carefully orchestrated symphony of scents that unfolds in three distinct movements, each revealing new
                            depths and dimensions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {["top", "heart", "base"].map((category, categoryIndex) => (
                            <div key={category} className="space-y-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 gold-gradient rounded-full flex items-center justify-center pulse-glow">
                                        {category === "top" && <Wind className="w-8 h-8 text-black" />}
                                        {category === "heart" && <Heart className="w-8 h-8 text-black" />}
                                        {category === "base" && <Droplets className="w-8 h-8 text-black" />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-yellow-400 capitalize mb-2">{category} Notes</h3>
                                    <p className="text-gray-400 text-sm">
                                        {category === "top" && "First impression • 15-30 minutes"}
                                        {category === "heart" && "The soul • 2-4 hours"}
                                        {category === "base" && "The foundation • 6-8 hours"}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {fragranceNotes
                                        .filter((note) => note.category === category)
                                        .map((note, index) => (
                                            <div
                                                key={note.name}
                                                className="note-reveal glass-effect p-4 rounded-xl hover-lift"
                                                style={{ animationDelay: `${categoryIndex * 0.2 + index * 0.1}s` }}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-semibold text-white">{note.name}</h4>
                                                    <span className="text-yellow-400 text-sm">{note.intensity}%</span>
                                                </div>
                                                <p className="text-gray-400 text-sm mb-3">{note.description}</p>
                                                <div className="w-full bg-gray-800 rounded-full h-2">
                                                    <div
                                                        className="gold-gradient h-2 rounded-full transition-all duration-1000"
                                                        style={{ width: `${note.intensity}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fragrance