import React, { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface SimulationEmbedProps {
  embedUrl: string;
  title: string;
}

export const SimulationEmbed: React.FC<SimulationEmbedProps> = ({ embedUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 p-4 bg-black bg-opacity-90'
          : 'w-full aspect-video'
      }`}
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-sm"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      <iframe
        src={embedUrl}
        title={title}
        className={`border-0 ${
          isFullscreen ? 'w-full h-full' : 'w-full h-full aspect-video'
        }`}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};