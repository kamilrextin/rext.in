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
      <div className="min-h-screen bg-black bg-opacity-20">
        <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Name/Title */}
        <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
          Kamil Ali Rextin
        </h1>
        
        {/* Main Bio */}
        <div className="space-y-6 text-lg leading-relaxed mb-12 text-white drop-shadow-md">
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
        <div className="space-y-4 text-lg text-white drop-shadow-md">
          <p>
            You can also find my writing on{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Substack</a>,{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Medium</a>, and{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Quora</a>.
          </p>
          
          <p>
            Photography on{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Flickr</a> /{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">DeviantArt</a>
          </p>
          
          <p>
            Work is on{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">LinkedIn</a>
          </p>
          
          <p>
            Personal is on{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Twitter</a> & occasionally on{' '}
            <a href="#" className="text-yellow-300 hover:text-yellow-100 hover:underline font-medium">Threads</a>.
          </p>
        </div>
        
        </div>
      </div>
    </div>
  );
}
