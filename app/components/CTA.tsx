import { Button } from '@/components/ui/button'
import React from 'react'

const CTA = () => {
    return (
        <>
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow-gold">Your Signature Awaits</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Join thousands who have discovered their perfect scent. Experience Lumière and let your presence be
                        remembered long after you've left the room.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                        <Button className="flex-1 gold-gradient text-black text-lg py-6 hover:opacity-90 transition-opacity">
                            Shop Now
                        </Button>
                        <Button variant="outline" className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 py-6">
                            Find Your Scent
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA;