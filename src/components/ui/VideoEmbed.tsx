import React from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  youtubeUrl?: string | null;
  title: string;
  caption?: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeUrl, title, caption }) => {
  const videoId = youtubeUrl ? getYouTubeId(youtubeUrl) : null;

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-lg bg-brand-deep shadow-card" style={{ paddingBottom: '56.25%' }}>
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
            <div className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center mb-3">
              <Play className="h-7 w-7 text-white fill-white" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wide">Coming Soon</span>
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-3 text-sm italic text-brand-slate text-center">{caption}</p>
      )}
    </div>
  );
};

export default VideoEmbed;
