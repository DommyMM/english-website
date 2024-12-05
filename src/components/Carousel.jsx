import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    
    const images = [
        {
            src: "/images/fgo.jpg",
            alt: "Fate/Grand Order",
            caption: "Fate/Grand Order - Reimagining historical figures into anime"
        },
        {
            src: "/images/genshin.jpg",
            alt: "Genshin Impact",
            caption: "Genshin Impact - Record-breaking Chinese game that brought gacha to the mainstream"
        },
        {
            src: "/images/elden.jpg",
            alt: "Elden Ring",
            caption: "Elden Ring - The epitome of Western fantasy combined with Eastern design and difficulty"
        },
        {
            src: "/images/wukong.jpg",
            alt: "Black Myth: Wukong",
            caption: "Black Myth: Wukong - The most popular Chinese mythological figure brought to life"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    const getOffsetStyles = (index) => {
        const diff = (index - currentIndex + images.length) % images.length;
        const offset = diff > images.length / 2 ? diff - images.length : diff;
        const absOffset = Math.abs(offset);
        const direction = Math.sign(offset);

        return {
            transform: `
                rotateY(${offset * -50}deg)
                scaleY(${1 + absOffset * -0.4})
                translateZ(${absOffset * -30}rem)
                translateX(${direction * 5}rem)
            `,
            filter: `blur(${absOffset * 1}rem)`,
            opacity: absOffset <= 1 ? 1 : 0,
            zIndex: 10 - absOffset,
        };
    };

    return (
        <div className="w-full flex items-center justify-center bg-gradient-to-br">
            <div className="relative w-[724px] perspective-500">
                <div className="relative h-[400px] transform-gpu preserve-3d">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="absolute w-full h-full transition-all duration-300 ease-out"
                            style={getOffsetStyles(index)}
                        >
                            <div className="w-full h-full rounded-lg overflow-hidden bg-white/90 shadow-xl">
                                <img 
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 w-full bg-gray-800 p-2 text-sm text-gray-400 text-center">
                                    {image.caption}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full text-white text-5xl z-20 cursor-pointer"
                >
                    <ChevronLeft className="w-12 h-12" />
                </button>
                <button 
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-white text-5xl z-20 cursor-pointer"
                >
                    <ChevronRight className="w-12 h-12" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;