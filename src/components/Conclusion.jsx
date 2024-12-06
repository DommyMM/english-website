import React from 'react'

const Conclusion = () => {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Conclusion</h2>
            <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">Historical Perspective</h3>
                <p className="text-gray-300 mb-4 text-center">
                    The gaming industry's approach to Eastern cultural elements has evolved significantly. Early successes like Mario and Sonic masked their cultural origins behind universal themes. Today's games, however, demonstrate a shift towards celebrating cultural identity while maintaining global appeal.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <img 
                        src="/images/mario.jpg" 
                        alt="Early Mario game showing universal themes"
                        className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
                    />
                    <img 
                        src="/images/gacha.jpg" 
                        alt="Modern Gacha games showcasing cultural identity"
                        className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
                    />
                </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">Modern Success Stories</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-semibold">Fate/Grand Order:</span> Boldly reinterprets historical figures through an Eastern lens</li>
                    <li><span className="font-semibold">Genshin Impact:</span> Blends Eastern mythology with global accessibility</li>
                    <li><span className="font-semibold">Black Myth: Wukong:</span> Proudly showcases Chinese mythology in modern gaming</li>
                </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">Key Takeaways</h3>
                <p className="text-gray-300 mb-4">
                    The success of these games proves that cultural authenticity and global appeal are not mutually exclusive. As both the industry and audiences mature, games can embrace their cultural roots while reaching worldwide audiences. This represents a significant shift in how Eastern cultural elements are presented and received in the gaming medium.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Conclusion