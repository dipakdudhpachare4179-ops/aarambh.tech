import React, { useState, useEffect, useRef } from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Upload, 
  Maximize2, 
  Film, 
  Sparkles, 
  Layers, 
  Check, 
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import { saveHeroVideo, loadHeroVideo, clearHeroVideo } from '../../utils/videoStorage';

interface HeroVideoAnimationProps {
  onNodeSelect?: (name: string) => void;
  onCtaClick?: () => void;
}

export const HeroVideoAnimation: React.FC<HeroVideoAnimationProps> = ({ onNodeSelect, onCtaClick }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'video' | '3d'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasCustomVideo, setHasCustomVideo] = useState(false);
  const [showUploadPrompt, setShowUploadPrompt] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved video from IndexedDB on mount
  useEffect(() => {
    let activeObjUrl: string | null = null;
    loadHeroVideo().then((blob) => {
      if (blob) {
        activeObjUrl = URL.createObjectURL(blob);
        setVideoUrl(activeObjUrl);
        setHasCustomVideo(true);
      }
    });

    return () => {
      if (activeObjUrl) URL.revokeObjectURL(activeObjUrl);
    };
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('video/')) return;
    try {
      await saveHeroVideo(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setHasCustomVideo(true);
      setShowUploadPrompt(false);
      setViewMode('video');
      setIsPlaying(true);
    } catch (err) {
      console.error('Failed to save video to storage', err);
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
    setVideoUrl(null);
    setHasCustomVideo(false);
  };

  return (
    <div 
      className="relative w-full h-full select-none"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden File Input for uploading/changing the video */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFileUpload(f);
        }}
        className="hidden"
      />

      {/* MODE 1: Actual Video / Cinematic Recreation Mode */}
      {viewMode === 'video' ? (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {videoUrl ? (
            /* Real Video Player when user attaches the video file */
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover object-center transition-opacity duration-700"
              />
              {/* Cinematic Vignette Overlay to blend smoothly with dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/80 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080a]/40 to-[#07080a] pointer-events-none" />
            </div>
          ) : (
            /* High-fidelity Cinematic Visual Recreating the uploaded video frames */
            <div className="relative w-full h-full flex items-center justify-center bg-[#07080a] overflow-hidden">
              {/* Backlight & Volumetric Atmosphere from the video */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-900/20 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl pointer-events-none" />

              {/* Atmospheric floating dust particles */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

              {/* 3D Giant Metallic Title: AARAMBH TECH AGENCY */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl">
                
                {/* 3D Chrome Agency Typography */}
                <div className="relative mb-6 select-none">
                  <div className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-none">
                    AARAMBH
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] mt-1">
                    TECH AGENCY
                  </div>
                </div>

                {/* Floating 3D Holographic Glass Cards (As seen in the video at 00:06-00:07) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl my-4">
                  {/* Card 1: AI AUTOMATION */}
                  <div className="group relative p-3 sm:p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/20 hover:border-cyan-400/60 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-[10px] sm:text-xs font-mono-custom tracking-wider text-cyan-400 uppercase mb-1">
                      System
                    </div>
                    <div className="font-display font-bold text-xs sm:text-base text-white">
                      AI AUTOMATION
                    </div>
                  </div>

                  {/* Card 2: AI AGENTS */}
                  <div className="group relative p-3 sm:p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/20 hover:border-blue-400/60 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-[10px] sm:text-xs font-mono-custom tracking-wider text-blue-400 uppercase mb-1">
                      Intelligence
                    </div>
                    <div className="font-display font-bold text-xs sm:text-base text-white">
                      AI AGENTS
                    </div>
                  </div>

                  {/* Card 3: CONTENT CREATION */}
                  <div className="group relative p-3 sm:p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/20 hover:border-emerald-400/60 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-[10px] sm:text-xs font-mono-custom tracking-wider text-emerald-400 uppercase mb-1">
                      Growth
                    </div>
                    <div className="font-display font-bold text-xs sm:text-base text-white">
                      CONTENT CREATION
                    </div>
                  </div>
                </div>

                {/* Founder Presentation Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono-custom">
                  <span>Founder: Paras Dudhapachare</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-500">आरंभ टेक एजेंसी</span>
                </div>

                {/* Upload Video Prompt Banner */}
                <div className="mt-6">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 active:bg-blue-700 border border-blue-400/40 shadow-xl shadow-blue-600/20 backdrop-blur-sm transition-all duration-200 cursor-pointer hover:scale-105"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Select & Attach Video File (.mp4)</span>
                  </button>
                  <p className="text-[10px] text-neutral-500 mt-1.5 font-body">
                    Click to load your original video file directly into this animation section.
                  </p>
                </div>

              </div>

              {/* Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/60 pointer-events-none" />
            </div>
          )}

          {/* Floating Media Controls Toolbar (When Video is present) */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            {videoUrl && (
              <>
                <button
                  onClick={togglePlay}
                  title={isPlaying ? 'Pause Video' : 'Play Video'}
                  className="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-md border border-neutral-700/60 shadow-lg cursor-pointer transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  className="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-md border border-neutral-700/60 shadow-lg cursor-pointer transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
                </button>
              </>
            )}

            <button
              onClick={() => fileInputRef.current?.click()}
              title="Upload / Change Video File"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-xs font-mono-custom text-neutral-300 hover:text-white backdrop-blur-md border border-neutral-700/60 shadow-lg cursor-pointer transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-blue-400" />
              <span>{hasCustomVideo ? 'Change Video' : 'Attach MP4'}</span>
            </button>

            {hasCustomVideo && (
              <button
                onClick={handleResetVideo}
                title="Reset to default animation"
                className="p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-red-400 backdrop-blur-md border border-neutral-700/60 shadow-lg cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* MODE 2: Interactive 3D Canvas Universe */
        <Hero3DCanvas onNodeSelect={onNodeSelect} />
      )}

      {/* Top Right Mode Switcher: Video Mode vs 3D Ecosystem */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-neutral-800 shadow-xl">
        <button
          onClick={() => setViewMode('video')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === 'video'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>Agency Video</span>
        </button>

        <button
          onClick={() => setViewMode('3d')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === '3d'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>3D Universe</span>
        </button>
      </div>
    </div>
  );
};

export default HeroVideoAnimation;
