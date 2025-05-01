import { useEffect, useRef } from "react";

const VideoPlayer = ({ publicId, posterTime }) => {
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Add custom CSS for centering the play button
    const style = document.createElement('style');
    style.textContent = `
      .video-js .vjs-big-play-button {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        margin: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Wait for next tick to ensure element is mounted
    const initializePlayer = () => {
      if (!videoRef.current || !window.cloudinary) return;

      try {
        // Cleanup previous instance if it exists
        if (playerRef.current) {
          playerRef.current.dispose();
          playerRef.current = null;
        }

        // Create a new video element
        const videoElement = document.createElement('video');
        videoElement.className = "cld-video-player video-js vjs-big-play-centered w-full h-full absolute inset-0 vjs-theme-custom";
        videoElement.controls = true;
        videoElement.preload = "auto";

        // Replace the old video element with the new one
        if (videoRef.current.firstChild) {
          videoRef.current.removeChild(videoRef.current.firstChild);
        }
        videoRef.current.appendChild(videoElement);

        const playerConfig = {
          cloud_name: 'ddp35mzkz',
          publicId: publicId,
          fluid: true,
          controls: true,
          preload: 'auto',
          videoProps: {
            playerType: "cloudinary",
            logo: false,
            showJumpControls: true,
            skin: "dark",
            bigPlayButton: true,
            bigPlayButtonCentered: true,
            controls: {
              logo: {
                show: false
              }
            }
          },
          transformation: {
            customPlayButton: {
              color: "#8B5CF6" 
            }
          },
          colors: {
            accent: "#8B5CF6", 
            base: "#1F2937",   
            text: "#F3F4F6"    
          }
        };

        if (posterTime) {
          playerConfig.posterOptions = {
            transformation: {
              start_offset: posterTime
            }
          };
        }

        // Initialize new player
        playerRef.current = window.cloudinary.videoPlayer(videoElement, playerConfig);
      } catch (error) {
        console.error('Error initializing video player:', error);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initializePlayer, 100);

    // Cleanup on unmount or when publicId changes
    return () => {
      clearTimeout(timeoutId);
      try {
        if (playerRef.current) {
          playerRef.current.dispose();
          playerRef.current = null;
        }
      } catch (error) {
        console.error('Error disposing video player:', error);
      }
    };
  }, [publicId, posterTime]);

  return (
    <div className="aspect-video rounded-lg overflow-hidden relative">
      <div 
        ref={videoRef}
        className="w-full h-full absolute inset-0"
      />
    </div>
  );
};

export default VideoPlayer; 