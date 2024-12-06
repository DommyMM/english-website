import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Research = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const COLORS = ['#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#f97316'];
    
    const researchData = [
        {
            title: "Country",
            description: "Geographic distribution of survey respondents",
            extra: "The responses was pretty diverse, and contained people from both Eastern and Western regions. This kept my sample size varied and allowed me to draw more accurate conclusions.",
            type: "pie",
            data: [
                { name: "Americas", value: 7 },
                { name: "Asia", value: 5 },
                { name: "Europe", value: 2 }
            ]
        },
        {
            title: "Game",
            description: "Number of respondents familiar with each game",
            extra: "Unsurprisingly, decade old games like GTA and Mario were the most recognized. However, it was interesting to see that newer games like Genshin and Elden Ring were also quite popular. Overall, the niche of the Eastern style games like Fate can also be identified, as only about half of the participants recognized it.",
            type: "bar",
            data: [
                { name: "GTA", value: 13 },
                { name: "Fate", value: 7 },
                { name: "Mario", value: 11 },
                { name: "Zelda", value: 9 },
                { name: "Genshin", value: 10 },
                { name: "Doom", value: 8 },
                { name: "Elden Ring", value: 9 },
                { name: "Wukong", value: 8 }
            ]
        },
        {
            title: "Origin",
            description: "How many games respondents identified as having Eastern origins",
            extra: "When asked about the origin of the games, there were quite the varied opinions. While the modal answer 'Most' was correct, there were also a significant number of people who thought that only 'Some' of the games were Eastern. This shows that the perception of Eastern games is not as clear-cut as one might think.",
            type: "pie",
            data: [
                { name: "Most", value: 5 },
                { name: "Half", value: 4 },
                { name: "Some", value: 3 },
                { name: "None", value: 2 }
            ]
        },
        {
            title: "Knowledge",
            description: "Self-reported familiarity with Eastern culture (1-7 scale)",
            extra: "Evidently, the familiarity with Eastern culture was also varied, with just under half being unfamiliar while the other half familiar. This correlates with our earlier results of country of origin too, as those from Asia would tend to be more familiar with their own culture.",
            type: "bar",
            data: [
                { name: "1", value: 3 },
                { name: "2", value: 2 },
                { name: "3", value: 1 },
                { name: "4", value: 0 },
                { name: "5", value: 3 },
                { name: "6", value: 3 },
                { name: "7", value: 3 }
            ]
        },
        {
            title: "Influence",
            description: "Perceived influence of Eastern culture on daily life (1-7 scale)",
            extra: "What's interesting is that despite the unfarmiliarty with Eastern culture, almost all the respondents agreed that it had a substantial influence on their daily lives. This also demonstrated a clear distinction between the perception of Eastern culture and the actual influence it has.",
            type: "bar",
            data: [
                { name: "1", value: 1 },
                { name: "2", value: 0 },
                { name: "3", value: 0 },
                { name: "4", value: 1 },
                { name: "5", value: 4 },
                { name: "6", value: 4 },
                { name: "7", value: 4 }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % researchData.length);
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const element = document.getElementById('research');
            const rect = element?.getBoundingClientRect();
            const isVisible = rect?.top >= 0 && rect?.bottom <= window.innerHeight;
            
            if (!isVisible) return;

            if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) => (prev - 1 + researchData.length) % researchData.length);
            } else if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) => (prev + 1) % researchData.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [researchData.length]);

    const getStyles = (index) => {
        const diff = (index - currentIndex + researchData.length) % researchData.length;
        const offset = diff > researchData.length / 2 ? diff - researchData.length : diff;
        const absOffset = Math.abs(offset);
        const direction = Math.sign(offset);
    
        return {
            transform: `
                translateX(${direction * 25}rem)
                scale(${1 + absOffset * -0.1})
            `,
            opacity: absOffset <= 1 ? 1 - absOffset * 0.5 : 0,
            zIndex: 10 - absOffset,
            pointerEvents: absOffset === 0 ? 'auto' : 'none',
            filter: absOffset === 0 ? 'blur(0)' : 'blur(3px)'
        };
    };
    const renderChart = (item) => {
        if (item.type === "pie") {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={item.data}
                            cx="50%"
                            cy="50%"
                            label={false}
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {item.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend 
                            align="center"
                            verticalAlign="middle"
                            layout="vertical"
                            iconType='circle'
                            wrapperStyle={{ 
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-250px, -50%)' 
                            }}
                        />
                        <Tooltip 
                            formatter={(value, name) => [
                                `${((value / item.data.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(0)}%`, 
                                name
                            ]}
                            contentStyle={{ 
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '0.5rem',
                                color: '#fff',
                                boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            );
        }
        
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={item.data}>
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1f2937',
                            border: 'none',
                            borderRadius: '0.5rem',
                            color: '#fff'
                        }}
                        formatter={(value) => [`${value} respondents`]}
                    />
                    <Bar 
                        dataKey="value" 
                        fill="#6366f1"
                        radius={[4, 4, 0, 0]}
                    />
                    <XAxis 
                        dataKey="name" 
                        stroke="#fff"
                        style={{
                            fontSize: '0.8rem'
                        }}
                    />
                    <YAxis 
                        stroke="#fff"
                        domain={[0, 'dataMax + 2']}
                        tickCount={6} 
                        style={{
                            fontSize: '0.8rem'
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        );
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-6" id="research">
            <h2 className="text-3xl font-bold text-center">Research Findings</h2>
            
            <div className={`relative perspective-500 mx-auto transition-all duration-500 ${
                isExpanded ? 'h-[550px]' : 'h-[400px]'
            } ${
                isExpanded ? 'w-3/4' : 'w-2/3'
            }`}>
                <div className="relative w-full h-full">
                    {researchData.map((item, index) => (
                        <div
                            key={index}
                            className="absolute w-full h-full transition-all duration-500 ease-out cursor-pointer"
                            style={getStyles(index)}
                            onClick={currentIndex === index ? toggleExpand : undefined}
                        >
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
                                <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
                                <div className="h-[320px]">
                                    {renderChart(item)}
                                </div>
                                <div className={`flex flex-col transition-all duration-500 ${
                                    isExpanded && currentIndex === index 
                                        ? 'opacity-100 max-h-[250px]' 
                                        : 'opacity-0 max-h-0'
                                } overflow-hidden`}>
                                    <p className="text-gray-400 text-sm text-center mb-4">
                                        {item.description}
                                    </p>
                                    <p className="text-gray-300 text-center">
                                        {item.extra}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + researchData.length) % researchData.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % researchData.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default Research;