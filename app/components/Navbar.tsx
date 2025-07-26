import { Button } from '@/components/ui/button'
import { Heart, ShoppingBag, Sparkles } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center pulse-glow">
                            <Sparkles className="w-5 h-5 text-black" />
                        </div>
                        <h1 className="text-2xl font-bold text-shadow-gold">LUMIÈRE</h1>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {["Collection", "Story", "Notes", "Reviews"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400">
                            <Heart className="w-5 h-5" />
                        </Button>
                        <Button className="gold-gradient text-black hover:opacity-90 transition-opacity">
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Cart
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar