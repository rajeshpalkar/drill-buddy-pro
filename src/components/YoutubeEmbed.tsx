
import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title = "YouTube video player", className = "" }) => {
  // Extract video ID from full YouTube URL if provided
  const getVideoId = (urlOrId: string): string => {
    // If it's already just an ID (no slashes or youtube.com), return it
    if (!/[/.]/.test(urlOrId)) {
      return urlOrId;
    }
    
    // Try to extract ID from various YouTube URL formats
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = urlOrId.match(youtubeRegex);
    
    return match ? match[1] : urlOrId; // Return the extracted ID or the original string
  };
  
  const embedId = getVideoId(videoId);
  
  return (
    <div className={`relative w-full pt-[56.25%] overflow-hidden rounded-lg ${className}`}>
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default YoutubeEmbed;
