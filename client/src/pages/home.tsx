export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Name/Title */}
        <h1 className="text-5xl font-bold mb-8 text-black">
          Kamil Ali Rextin
        </h1>
        
        {/* Main Bio */}
        <div className="space-y-6 text-lg leading-relaxed mb-12">
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
  );
}
