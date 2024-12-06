import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Book, Gamepad2, Crown } from 'lucide-react';

const CaseStudy = ({ title, icon: Icon, color, summary, content, isExpanded, onToggle }) => {
    const elementRef = useRef(null);
    useEffect(() => {
        if (isExpanded && elementRef.current) {
        elementRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        }
    }, [isExpanded]);

    return (
    <div ref={elementRef} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div 
        className="p-4 cursor-pointer flex items-center gap-4 hover:bg-gray-700 border-b border-gray-700 transition-colors duration-200" 
        onClick={onToggle}
        >
        {isExpanded ? <ChevronDown className="h-5 w-5 flex-shrink-0" /> : <ChevronRight className="h-5 w-5 flex-shrink-0" />}
        <Icon className={`h-6 w-6 ${color}`} />
        <h3 className="text-2xl font-semibold flex-grow text-center">{title}</h3>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-[1000px]' : 'max-h-0'
        } border-l-8 ${color} overflow-hidden`}>
        <div className="p-6 bg-gray-700 space-y-4">
            {content}
        </div>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-0' : 'max-h-[1000px]'
        } overflow-hidden`}>
        <p className="p-4 text-center text-gray-300">{summary}</p>
        </div>
    </div>
    );
};

const CaseStudies = () => {
    const [expandedCases, setExpandedCases] = useState({
        fgo: false,
        genshin: false,
        wukong: false
    });
    const toggleCase = (caseId) => {
        setExpandedCases(prev => ({
        ...prev,
        [caseId]: !prev[caseId]
        }));
    };
    const cases = [
        {
            id: 'fgo',
            title: 'Fate/Grand Order',
            icon: Book,
            color: 'text-blue-500 border-blue-500',
            summary: 'Reimagination of historical figures through an Eastern lens, surpassing their historical counterparts in popularity',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-200 text-center">A mobile game that ranks among the highest-grossing mobile games of all time, known for its creative reinterpretation of historical figures</p>
                    
                    <div className="flex gap-4">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/astolfo.jpg" 
                                alt="Astolfo" 
                                className="w-[1400px] object-contain"
                            />
                        </div>
                        <div className="w-1/2 space-y-2">
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h5 className="font-medium mb-2 text-blue-400">The Astolfo Effect</h5>
                                <p className="text-gray-300">FGO's reimagined characters often became more recognized than their historical counterparts online</p>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium mb-2 text-blue-400">Creative Freedom</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Gender-swapped historical figures</li>
                                    <li>• Complete personality overhauls</li>
                                    <li>• Anime-styled character designs</li>
                                    <li>• Unique interpretations of folklore</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium mb-2 text-blue-400">Market Impact</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Billions in revenue globally</li>
                                    <li>• Pioneer of character reimagination</li>
                                    <li>• Still in service today, a decade later</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 space-y-2">
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium text-blue-400">Research Validation</h4>
                                <p className="text-gray-300">Study by Tomotani examined top 50 image search results for various historical figures, confirming FGO's versions often dominated online presence</p>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium text-blue-400">Results</h4>
                                <p className="text-gray-300">More niche figures completely overshadowed, while major figures like Sherlock Holmes or King Arthur retained originality, though Fate results still present</p>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium text-blue-400">Cultural Shift</h4>
                                <p className="text-gray-300">Demonstrated how Eastern interpretations can reshape global perceptions of historical and mythological figures</p>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium text-blue-400">The Progenitor</h4>
                                <p className="text-gray-300">Was the very first 'gacha' series that left Asia and grew poular on a global scale</p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/tomotani.jpg" 
                                alt="Tomotani Research Graph" 
                                className="h-[440px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'genshin',
            title: 'Genshin Impact',
            icon: Gamepad2,
            color: 'text-green-500 border-green-500',
            summary: 'Masterful cultural localization and global marketing strategy, making Eastern concepts accessible while maintaining authenticity.',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-200 text-center">A breakthrough Chinese game that achieved global success through careful cultural adaptation and strategic marketing</p>
                    
                    <div className="flex gap-6">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/zhongli.jpg" 
                                alt="Zhongli" 
                                className="w-[850px] object-contain"
                            />
                        </div>
                        <div className="w-1/2 space-y-2">
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h5 className="font-medium mb-2 text-green-400">Cultural Translation</h5>
                                <p className="text-gray-300">Original: "此乃天道" (This is the way of Heaven)</p>
                                <p className="text-gray-300">Localized: "Order guide you"</p>
                                <p className="text-gray-300 mt-2">Preserves original meaning but made it easier for other audience to understand (God's Will)</p>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/dao.jpg" 
                                alt="Dao" 
                                className="w-[600px] object-contain"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 space-y-2">
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h5 className="font-medium mb-2 text-purple-400">Achievement Highlights</h5>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• $6.3+ billion revenue from MOBILE only</li>
                                    <li>• 65 million monthly players </li>
                                    <li>• Countless nominations and awards</li>
                                    <li>• The face of the gacha industry</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                                <h4 className="font-medium mb-2 text-green-400">Brand Strategy</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Numerous partnerships</li>
                                    <li>• Multi-platform content creator endorsement</li>
                                    <li>• Global promotion events</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/genshin-collab.jpg" 
                                alt="Genshin Collaborations" 
                                className="w-[1250px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
        id: 'wukong',
        title: 'Black Myth: Wukong',
        icon: Crown,
        color: 'text-purple-500 border-purple-500',
        summary: 'Bold embrace of Eastern mythology through the story of the Monkey King, achieving global success through visual storytelling.',
        content: (
            <div className="space-y-6">
                <p className="text-gray-200 text-center">An indie Chinese game following the legendary Monkey King that embraced its cultural roots</p>
                <div className="flex gap-4">
                    <div className=" rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="/images/monkey.jpg" 
                            alt="Wukong" 
                            className="w-[1240px] object-contain"
                        />
                    </div>
                    <div className="w-1/2 space-y-2">
                        <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                            <h5 className="font-medium mb-2 text-purple-400">Achievement Highlights</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li>• 20M+ copies sold in first month</li>
                                <li>• 2.5M peak concurrent players</li>
                                <li>• Best Art Direction award winner</li>
                                <li>• 2024 Ultimate Game of the Year </li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                            <h4 className="font-medium mb-2 text-purple-400">Awe Transcending Culture</h4>
                            <p className="text-gray-300">"Do you know what that means? I don't get it, but I think it's cool" - Player response to the game's deep cultural elements</p>
                        </div>
                        <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                            <h4 className="font-medium mb-2 text-purple-400">Cultural Impact</h4>
                            <p className="text-gray-300">Greatly increased popularity of Wukong along with related topics upon launch</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2 space-y-2">
                        <iframe 
                                src="https://trends.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22Wukong%22%2C%22geo%22%3A%22US%22%2C%22time%22%3A%222024-08-01%202024-10-01%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&hl=en&tz=-480"
                                className="w-full h-[300px] rounded"
                        />
                        <div className="bg-gray-800 px-4 py-2 rounded shadow-lg">
                            <h4 className="font-medium text-purple-400">Show, Not Tell</h4>
                            <p className="text-gray-300">Instead of arguing about the differences between different depictions of dragons, the game just proved it magnificently</p>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="/images/loong.jpg" 
                            alt="Loong" 
                            className="w-[1250px] object-contain"
                        />
                    </div>
                </div>
            </div>
        )
        }
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="space-y-4">
            {cases.map(caseStudy => (
            <CaseStudy
                key={caseStudy.id}
                {...caseStudy}
                isExpanded={expandedCases[caseStudy.id]}
                onToggle={() => toggleCase(caseStudy.id)}
            />
            ))}
        </div>
        </div>
    );
};

export default CaseStudies;