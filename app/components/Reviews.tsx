import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star } from 'lucide-react'
import React, { useState } from 'react'

export interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
}

const Reviews = ({ reviews }: { reviews: Review[] }) => {
     const [currentReview, setCurrentReview] = useState(0)
    return (
        <>

            <section id="reviews" className="py-24 luxury-gradient">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow-gold">What They Say</h2>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-yellow-400">4.9</span>
                            <span className="text-gray-400">from 2,847 reviews</span>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className={`transition-all duration-500 ${index === currentReview ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                                        }`}
                                >
                                    <Card className="bg-black/50 border-gray-800 p-8">
                                        <CardContent className="text-center">
                                            <div className="flex items-center justify-center gap-1 mb-6">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                                                "{review.comment}"
                                            </blockquote>
                                            <div className="flex items-center justify-center gap-4">
                                                <div>
                                                    <div className="font-semibold text-white">{review.name}</div>
                                                    <div className="text-sm text-gray-400 flex items-center gap-2">
                                                        {review.date}
                                                        {review.verified && (
                                                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                                                                <Check className="w-3 h-3 mr-1" />
                                                                Verified
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        {/* Review Navigation */}
                        <div className="flex justify-center gap-2 mt-8">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentReview(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview ? "bg-yellow-400" : "bg-gray-600 hover:bg-gray-500"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews  