import React, { useState, useEffect, useRef } from 'react'
import Carousel from './Carousel'

const useScrollAnimation = () => {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const current = ref.current
        if (current) {
            observer.observe(current)
        }

        return () => {
            if (current) {
                observer.unobserve(current)
            }
        }
    }, [])

    return ref
}

const AnimatedSection = ({ children, className = "" }) => {
    const ref = useScrollAnimation()
    return (
        <div 
            ref={ref} 
            className={`opacity-0 translate-x-16 transition-all duration-700 ease-out ${className}`}
        >
            {children}
        </div>
    )
}

const ProgressBar = ({ containerRef, isExpanded }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const updateProgress = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const containerTop = container.offsetTop;
            const containerHeight = container.clientHeight;
            const relativeScroll = Math.max(0, window.scrollY - containerTop);
            const progress = Math.max(0, Math.min(100, (relativeScroll / (containerHeight - window.innerHeight)) * 100));
            const isWithinSection = window.scrollY < (containerTop + containerHeight - window.innerHeight);
            setIsVisible(isWithinSection);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);
        updateProgress();

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, [containerRef]);

    return (
        <div 
            className={`fixed top-0 right-0 h-1 bg-gray-700 z-50 transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
                left: isExpanded ? '256px' : '64px'
            }}
        >
            <div 
                className="h-full bg-white transition-all duration-200"
                style={{ 
                    width: `${scrollProgress}%`
                }}
            />
        </div>
    );
};

const HomePage = ({isExpanded}) => {
    const containerRef = useRef(null);
    return (
        <div ref={containerRef} className="relative space-y-12">
            <ProgressBar containerRef={containerRef} isExpanded={isExpanded}/>
            <h2 className="text-6xl font-bold text-center mb-12">The Rise of Eastern Games</h2>
            <div className="space-y-16">
                <div className="space-y-4">
                    <p className="text-gray-300 text-center max-w-[750px] mx-auto">
                        Asia and America, the two biggest powerhouses in the world. Separated by the largest ocean on one side and the rest of the world on the other. 
                        Their cultures and ideologies couldn't be more different
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-lg max-w-[724px] mx-auto">
                        <img 
                            src="/images/cultural-difference.jpg" 
                            alt="East vs West" 
                            className="h-full object-contain"
                        />
                        <div className="bg-gray-800 p-2 text-sm text-gray-400 text-center rounded-b-lg">
                            As someone who grew up in Asia and moved to America, these differences are starkly apparent to me
                        </div>
                    </div>
                </div>

                <AnimatedSection className="space-y-4">
                    <p className="text-gray-300 text-center">
                    However, with the advent of the Internet, the world has become a much smaller place. This has allowed for communication across all levels like never before.
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="/images/internet.jpg" 
                            alt="Internet connecting the world" 
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-gray-800 p-2 text-sm text-gray-400 text-center">
                            This ranges all the way from personal communication to business, entertainment, and even politics
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="space-y-4">
                    <p className="text-gray-300 text-center">
                        COVID has only accelerated this process, with people being forced to stay at home and interact with the world through their screens. 
                    </p>
                    <a 
                        href="https://www.statista.com/statistics/201073/revenue-of-the-us-video-game-industry-by-segment/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block rounded-lg overflow-hidden shadow-lg max-w-[704px] mx-auto hover:opacity-90 transition-opacity"
                    >
                        <img 
                            src="/images/gaming-stats.jpg" 
                            alt="Gaming statistics visualization" 
                            className="h-fit object-cover"
                        />
                        <div className="bg-gray-800 p-2 text-sm text-gray-400 text-center">
                            One particular sector that experienced a massive boom was the gaming industry
                        </div>
                    </a>
                </AnimatedSection>

                <AnimatedSection className="space-y-4">
                    <p className="text-gray-300 text-center">
                        Among all these games, one specific category has been gaining a lot of traction in the Western market - Eastern games
                    </p>
                    <Carousel />
                </AnimatedSection>

                <AnimatedSection className="space-y-4">
                    <p className="text-gray-300 text-center">
                        What make these games particularly remarkable is that unlike their predecessors who gained Western acceptance by minimizing their cultural origins, modern Eastern games are thriving precisely
                        because they embrace their cultural identity while making it accessible through innovative design and thoughtful localization.
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="/images/eastern-games.jpg" 
                            alt="Eastern game aesthetics" 
                            className="w-full h-full object-cover"
                        />
                        <div className="bg-gray-800 p-2 text-sm text-gray-400 text-center">
                            They are very blatantly Asian, and that's what makes them so appealing
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="space-y-4">
                    <p className="text-gray-300 text-center">
                        This research examines how this new generation of Eastern games has redefined success in the global gaming market, transforming cultural authenticity from a potential barrier into a compelling
                        advantage. Through analysis of three influential titles - Fate/Grand Order's creative reimagining of historical figures, Genshin Impact's masterful cultural localization, and Black Myth: Wukong's
                        bold embrace of Eastern mythology - we explore how Eastern games are reshaping the global gaming landscape.
                    </p>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default HomePage