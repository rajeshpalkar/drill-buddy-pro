
import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title = "YouTube video player", className = "" }) => {
  return (
    <div className={`relative w-full pt-[56.25%] overflow-hidden rounded-lg ${className}`}>
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default YoutubeEmbed;
