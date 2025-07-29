import bgImage from "@assets/bg.png";
import starryNightImage from "@assets/starry-night.png";
import classicalPortraitImage from "@assets/classical-portrait.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState("");

  const backgrounds = [
    // Your uploaded images
    `url(${bgImage})`,
    `url(${starryNightImage})`,
    `url(${classicalPortraitImage})`,
    // CSS gradient variations that complement your images
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    "linear-gradient(135deg, #ff8a80 0%, #ffb74d 100%)",
    "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    // Dark gradients that complement the starry night and classical art
    "linear-gradient(135deg, #1a1c3a 0%, #2d3561 50%, #4a5568 100%)",
    "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    // Warm classical art-inspired gradients
    "linear-gradient(135deg, #8b4513 0%, #d2691e 50%, #f4a460 100%)",
    "linear-gradient(135deg, #2f1b69 0%, #8b7355 50%, #d4af37 100%)",
  ];

  useEffect(() => {
    // Select random background on component mount
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setCurrentBackground(backgrounds[randomIndex]);
  }, []);

  return (
    <div 
      className="min-h-screen text-gray-900 font-sans bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: currentBackground }}
    >
      <div className="min-h-screen bg-white bg-opacity-20">
        <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Name/Title */}
        <h1 className="text-5xl font-bold mb-8 text-gray-900">
          Kamil Ali Rextin
        </h1>
        
        {/* Main Bio */}
        <div className="space-y-6 text-lg leading-relaxed mb-12 text-gray-800">
          <p>
            I am Kamil Ali Rextin. Marketer & Techno Cautious Person.
          </p>
          
          <p>
            I've worked in B2B marketing since 2012. Before that I worked in IT & a short stint as a magazine writer.
          </p>
          
          <p>
            Father of 2 - currently in Vancouver, British Columbia. I was born and raised in Islamabad & have lived in Waterloo, Toronto & Montreal.
          </p>
          
          <p>
            I currently run 42 Agency & dabble with other ideas on the internet.
          </p>
        </div>
        
        {/* Links Section */}
        <div className="space-y-4 text-lg">
          <p>
            You can also find my writing on{' '}
            <a href="#" className="text-blue-600 hover:underline">Substack</a>,{' '}
            <a href="#" className="text-blue-600 hover:underline">Medium</a>, and{' '}
            <a href="#" className="text-blue-600 hover:underline">Quora</a>.
          </p>
          
          <p>
            Photography on{' '}
            <a href="#" className="text-blue-600 hover:underline">Flickr</a> /{' '}
            <a href="#" className="text-blue-600 hover:underline">DeviantArt</a>
          </p>
          
          <p>
            Work is on{' '}
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
          </p>
          
          <p>
            Personal is on{' '}
            <a href="#" className="text-blue-600 hover:underline">Twitter</a> & occasionally on{' '}
            <a href="#" className="text-blue-600 hover:underline">Threads</a>.
          </p>
        </div>
        
        </div>
      </div>
    </div>
  );
}
