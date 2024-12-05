import React, { useState, useEffect } from 'react'
import { Home, BookOpen, GamepadIcon, Globe, ChevronRight, ChevronLeft } from 'lucide-react'
import HomePage from './components/HomePage'
import CaseStudies from './components/CaseStudies.jsx'
import Research from './components/Research'
import Sources from './components/Sources'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isExpanded, setIsExpanded] = useState(true)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'cases', 'research', 'sources']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      {/* Sidebar */}
      <aside className={`${isExpanded ? 'w-64' : 'w-16'} bg-gray-800 fixed h-screen border-r border-gray-700 transition-all duration-300`}>
        <div className="p-4">
          
          <nav className="space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className={`w-full text-left rounded flex items-center gap-2 transition-colors duration-200 ${
                activeSection === 'home' 
                ? 'bg-gray-700 text-blue-400' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'
              } ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`}
              title={!isExpanded ? "Home" : ""}
            >
              <Home className="w-4 h-4 flex-shrink-0" />
              {isExpanded && <span>Home</span>}
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className={`w-full text-left rounded flex items-center gap-2 transition-colors duration-200 ${
                activeSection === 'cases' 
                ? 'bg-gray-700 text-blue-400' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'
              } ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`}
              title={!isExpanded ? "Case Studies" : ""}
            >
              <GamepadIcon className="w-4 h-4 flex-shrink-0" />
              {isExpanded && <span>Case Studies</span>}
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className={`w-full text-left rounded flex items-center gap-2 transition-colors duration-200 ${
                activeSection === 'research' 
                ? 'bg-gray-700 text-blue-400' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'
              } ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`}
              title={!isExpanded ? "Research" : ""}
            >
              <Globe className="w-4 h-4 flex-shrink-0" />
              {isExpanded && <span>Research</span>}
            </button>
            <button
              onClick={() => scrollToSection('sources')}
              className={`w-full text-left rounded flex items-center gap-2 transition-colors duration-200 ${
                activeSection === 'sources' 
                ? 'bg-gray-700 text-blue-400' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-blue-400'
              } ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`}
              title={!isExpanded ? "Sources" : ""}
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              {isExpanded && <span>Sources</span>}
            </button>
          </nav>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-2 -right-3 bg-gray-700 rounded-full p-1 text-gray-300 hover:text-blue-400"
        >
          {isExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-16'} flex-1`}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <section id="home" className="min-h-screen">
            <HomePage isExpanded={isExpanded} />
          </section>
          
          <section id="cases" className="pt-16">
            <CaseStudies />
          </section>
          
          <section id="research" className="min-h-screen pt-16">
            <Research />
          </section>
          
          <section id="sources" className="min-h-screen pt-16">
            <Sources />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App