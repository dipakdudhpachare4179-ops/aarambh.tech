import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Upload, 
  RotateCcw
} from 'lucide-react';
import { saveHeroVideo, loadHeroVideo, clearHeroVideo } from '../../utils/videoStorage';

interface HeroVideoBackgroundProps {
  onVideoLoaded?: () => void;
}

const DEFAULT_VIDEO_PATH = '/hero-animation.mp4';

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({ onVideoLoaded }) => {
  const [videoUrl, setVideoUrl] = useState<string>(DEFAULT_VIDEO_PATH);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasCustomVideo, setHasCustomVideo] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved video from IndexedDB on initial mount
  useEffect(() => {
    let activeObjUrl: string | null = null;
    loadHeroVideo().then((blob) => {
      if (blob) {
        activeObjUrl = URL.createObjectURL(blob);
        setVideoUrl(activeObjUrl);
        setHasCustomVideo(true);
        if (onVideoLoaded) onVideoLoaded();
      }
    });

    return () => {
      if (activeObjUrl) URL.revokeObjectURL(activeObjUrl);
    };
  }, [onVideoLoaded]);

  // Ensure autoplay triggers on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted is set so most browsers allow it
      });
    }
  }, [videoUrl]);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('video/')) return;
    try {
      await saveHeroVideo(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setHasCustomVideo(true);
      setLoadError(false);
      setIsPlaying(true);
      if (onVideoLoaded) onVideoLoaded();
    } catch (err) {
      console.error('Failed to save hero background video to storage', err);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileUpload(file);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleResetVideo = async () => {
    await clearHeroVideo();
    setVideoUrl(DEFAULT_VIDEO_PATH);
    setHasCustomVideo(false);
    setLoadError(false);
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden File Picker for Custom Video */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFileUpload(f);
        }}
        className="hidden pointer-events-auto"
      />

      {/* Responsive, Muted, Autoplaying, Looping Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {!loadError ? (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onError={() => setLoadError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center sm:object-[75%_35%] transition-opacity duration-700"
          />
        ) : (
          /* Atmospheric Fallback */
          <div className="absolute inset-0 w-full h-full bg-[#07080a]">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-sky-500/10 via-blue-900/15 to-transparent rounded-full blur-[140px]" />
          </div>
        )}
      </div>

      {/* High-Contrast Gradient Scrim Overlays (Ensures Hero Typography & CTA Readability) */}
      {/* 1. Left-to-right gradient: dense dark on left for text, transparent on right for video */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/85 sm:via-[#07080a]/65 to-[#07080a]/20 pointer-events-none z-10" />
      
      {/* 2. Top-to-bottom vignette gradient: blends smoothly with navbar and bottom sections */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/80 pointer-events-none z-10" />

      {/* Subtle Micro-pattern texture for added film grain feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-10" />

      {/* Quiet, Unobtrusive Video Control Bar in Bottom Right Corner */}
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          className="p-2 rounded-lg bg-neutral-950/75 hover:bg-neutral-900 text-neutral-300 hover:text-white backdrop-blur-md border border-neutral-800 transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className="p-2 rounded-lg bg-neutral-950/75 hover:bg-neutral-900 text-neutral-300 hover:text-white backdrop-blur-md border border-neutral-800 transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-400" /> : <Volume2 className="w-3.5 h-3.5 text-blue-400" />}
        </button>

        {hasCustomVideo && (
          <button
            onClick={handleResetVideo}
            aria-label="Reset background video"
            title="Reset to default animation"
            className="p-2 rounded-lg bg-neutral-950/75 hover:bg-neutral-900 text-neutral-400 hover:text-rose-400 backdrop-blur-md border border-neutral-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Video Load / Replace Trigger */}
        <button
          onClick={() => fileInputRef.current?.click()}
          title="Upload or replace animation video file (.mp4)"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950/75 hover:bg-neutral-900 text-neutral-300 hover:text-white text-[11px] font-mono-custom backdrop-blur-md border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer shadow-lg"
        >
          <Upload className="w-3 h-3 text-blue-400" />
          <span>{hasCustomVideo ? 'Replace Video' : 'Attach MP4'}</span>
        </button>
      </div>
    </div>
  );
};

export default HeroVideoBackground;
