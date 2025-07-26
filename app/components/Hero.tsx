"use client"

import React from 'react'
import { useState, useRef } from "react"
import { Star, Heart, ShoppingBag, Gift, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const sizes = [
    { size: "30ml", price: 120, label: "Travel Size" },
    { size: "50ml", price: 180, label: "Classic" },
    { size: "100ml", price: 280, label: "Signature" },
]

const Hero = () => {
    const [selectedSize, setSelectedSize] = useState("50ml")
    const [quantity, setQuantity] = useState(1)
    const heroRef = useRef<HTMLDivElement>(null)
    const selectedPrice = sizes.find((s) => s.size === selectedSize)?.price || 180

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="relative bottle-entrance">
                        <div className="relative w-full max-w-md mx-auto ripple-effect">
                            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shimmer-effect pulse-glow">
                                <img
                                    src="https://img.freepik.com/premium-psd/perfume-bottle-sand_23-2148961294.jpg?w=826"
                                    alt="Lumière Perfume Bottle"
                                    className="w-full h-full object-contain float-animation"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl float-animation" />
                        <div
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl float-animation"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-16 h-16 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 transition-colors glass-effect hover-lift"
                            >
                                <img
                                    src={`https://img.freepik.com/free-psd/amber-perfume-bottle-elegant-fragrance-luxurious-glass-container_191095-85650.jpg?t=st=1753547033~exp=1753550633~hmac=05eec19940cd5965b1d01722a2737123602b4c9b8af340f689d9ad95da0f7724&w=826`}
                                    alt={`View ${i}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-4">Limited Edition</Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-gold">LUMIÈRE</h1>
                        <p className="text-xl text-gray-300 mb-6">Eau de Parfum</p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            A symphony of light captured in crystal. Where bergamot dances with rose petals, and sandalwood whispers
                            secrets of eternity. This is more than fragrance—this is your signature written in scent.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-300">4.9 (2,847 reviews)</span>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Choose Your Size</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {sizes.map((option) => (
                                <button
                                    key={option.size}
                                    onClick={() => setSelectedSize(option.size)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${selectedSize === option.size
                                        ? "border-yellow-400 bg-yellow-400/10"
                                        : "border-gray-700 hover:border-gray-600"
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className="font-semibold">{option.size}</div>
                                        <div className="text-sm text-gray-400">{option.label}</div>
                                        <div className="text-yellow-400 font-bold">${option.price}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300">Quantity:</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-gray-700 hover:border-yellow-400 transition-colors flex items-center justify-center"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-semibold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-gray-700 hover:border-yellow-400 transition-colors flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-3xl font-bold text-yellow-400">${selectedPrice * quantity}</div>
                        <div className="flex gap-4">
                            <Button className="flex-1 gold-gradient text-black text-lg py-6 hover:opacity-90 transition-opacity">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Add to Cart
                            </Button>
                            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 py-6">
                                <Heart className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-6 border-t border-gray-800">
                        {[
                            { icon: Truck, label: 'Free Shipping' },
                            { icon: Shield, label: 'Authentic' },
                            { icon: Gift, label: 'Gift Wrap' },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                                <Icon className="w-4 h-4" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero