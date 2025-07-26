import { Sparkles } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="py-16 border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center pulse-glow">
                            <Sparkles className="w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-3xl font-bold text-shadow-gold">LUMIÈRE</h3>
                    </div>
                    <div className="text-center text-gray-400 mb-8">
                        <p className="text-lg mb-4">Where light becomes scent, and scent becomes memory.</p>
                        <div className="flex justify-center gap-8 text-sm">
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                Contact
                            </a>
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                Store Locator
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-gray-500">&copy; 2024 Lumière. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer