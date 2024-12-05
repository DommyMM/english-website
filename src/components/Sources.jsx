import React, { useState } from 'react'

const Sources = () => {
    const [citationStyle, setCitationStyle] = useState('apa')

    const sourcesData = [
        {
            id: 1,
            apa: "Tomotani, J. V., & Salvador, R. B. (2021). The Astolfo Effect: The Popularity of Fate/Grand Order Characters in Comparison to Their Real Counterparts. Journal of Geek Studies, 8(2), 59-69.",
            mla: 'Tomotani, João Vitor, and Rodrigo Brincalepe Salvador. "The Astolfo Effect: The Popularity of Fate/Grand Order Characters in Comparison to Their Real Counterparts." Journal of Geek Studies, vol. 8, no. 2, 2021, pp. 59-69.',
            doi: "10.5281/zenodo.8241594"
        },
        {
            id: 2,
            apa: "Blom, J. (2022). The Genshin Impact Media Mix: Free-to-Play Monetization from East Asia. Mechademia: Second Arc, 16(1), 144-152.",
            mla: 'Blom, Joleen. "The Genshin Impact Media Mix: Free-to-Play Monetization from East Asia." Mechademia: Second Arc, vol. 16, no. 1, 2022, pp. 144-152.',
            url: "https://muse.jhu.edu/pub/23/article/910024"
        },
        {
            id: 3,
            apa: "Mihu, C. C. (2023). Translating Identities: How Cultural Choices Shape Character Perception in Genshin Impact. East-West Cultural Passage.",
            mla: 'Mihu, Catrina-Claudia. "Translating Identities: How Cultural Choices Shape Character Perception in Genshin Impact." East-West Cultural Passage, 2023, doi:10.2478/ewcp-2023-0014.',
            doi: "10.2478/ewcp-2023-0014"
        },
        {
            id: 4,
            apa: "Gandolfi, E. (2018). Enjoying Death among Gamers, Viewers, and Users: A Network Visualization of Dark Souls 3's Trends on Twitch.tv and Steam Platforms. Information Visualization, 17(3), 218-238.",
            mla: 'Gandolfi, Enrico. "Enjoying Death among Gamers, Viewers, and Users: A Network Visualization of Dark Souls 3\'s Trends on Twitch.tv and Steam Platforms." Information Visualization, vol. 17, no. 3, 2018, pp. 218-238.',
            doi: "10.1177/1473871617717075"
        },
        {
            id: 5,
            apa: "Mao, H. (2024). A Study on Cross-Cultural Communication Factors of Black Myth: Wukong. Proceedings of the 2024 3rd International Conference on Social Sciences and Humanities and Arts (SSHA 2024). Advances in Social Science, Education, and Humanities Research.",
            mla: 'Mao, Hengbo. "A Study on Cross-Cultural Communication Factors of Black Myth: Wukong." Proceedings of the 2024 3rd International Conference on Social Sciences and Humanities and Arts, 2024.',
            doi: "10.2991/978-2-38476-259-0_73"
        }
    ]

    const renderCitation = (source) => {
        const citation = source[citationStyle]
        const hasLink = source.doi || source.url
        
        if (hasLink) {
            const link = source.doi ? `https://doi.org/${source.doi}` : source.url
            const linkText = source.doi ? '[DOI]' : '[URL]'
            return (
                <div>
                    {citation}
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-400 hover:text-blue-300"
                    >
                        {linkText}
                    </a>
                </div>
            )
        }
        return citation
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Bibliography</h2>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setCitationStyle('apa')}
                        className={`px-4 py-2 rounded ${citationStyle === 'apa' 
                            ? 'bg-gray-700 text-blue-400' 
                            : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'}`}
                    >
                        APA
                    </button>
                    <button 
                        onClick={() => setCitationStyle('mla')}
                        className={`px-4 py-2 rounded ${citationStyle === 'mla' 
                            ? 'bg-gray-700 text-blue-400' 
                            : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'}`}
                    >
                        MLA
                    </button>
                </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                {sourcesData.map((source) => (
                    <div key={source.id} className="pl-8 -indent-8">
                        {renderCitation(source)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sources