import bgImage from "@assets/bg.png";
import starryNightImage from "@assets/starry-night.png";
import classicalPortraitImage from "@assets/classical-portrait.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState("");

  const backgrounds = [
    // Your uploaded images only
    `url(${bgImage})`,
    `url(${starryNightImage})`,
    `url(${classicalPortraitImage})`,
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-8 py-12 bg-white bg-opacity-90 rounded-2xl shadow-2xl backdrop-blur-sm">
        
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
