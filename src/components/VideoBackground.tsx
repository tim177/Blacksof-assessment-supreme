"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly for better visual effect

      // Add event listeners to check if video is loaded and playing
      const video = videoRef.current;

      const handleCanPlay = () => {
        console.log("Video can play now");
        setVideoLoaded(true);
      };

      const handleError = (e: Event) => {
        console.error("Video error:", (e.target as HTMLVideoElement).error);
      };

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      // Force load attempt
      video.load();

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Video overlay to darken the background */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV !== "production" && (
        <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 text-xs z-50">
          Video state: {videoLoaded ? "Loaded" : "Loading..."}
        </div>
      )}
    </div>
  );
}
