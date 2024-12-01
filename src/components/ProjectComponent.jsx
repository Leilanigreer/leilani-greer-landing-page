import { FaExternalLinkAlt, FaPlayCircle, FaGithub } from "react-icons/fa";
import { useState } from "react";

const ProjectComponent = ({ 
  title, 
  technologies, 
  description, 
  media, 
  links 
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-8 border border-gray-700/50 hover:border-violet-500/50 transition-colors duration-300">
        {/* Header Section */}
        <div className="mb-6">
          {/* Title and Technologies */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {title}
              <span className="text-violet-500">.</span>
            </h2>

            <div className="flex gap-2 flex-wrap mb-6">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-violet-500/10 text-violet-500 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Media Section - Either Images or Video */}
          {media.type === 'images' && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {media.content.map((image, index) => (
                <div 
                  key={index}
                  className="w-full sm:w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Video Section - Only rendered if media type is video */}
        {media.type === 'video' && (
          <div className="mb-6 relative rounded-lg overflow-hidden bg-gray-900/50">
            <div className="aspect-video flex items-center justify-center">
              <button 
                onClick={media.content.onPlay}
                className="flex items-center gap-3 text-violet-500 hover:text-purple-300 transition-colors"
              >
                <FaPlayCircle className="w-12 h-12 sm:w-16 sm:h-16" />
                <span className="text-base sm:text-lg">Watch Video Walkthrough</span>
              </button>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="text-gray-300 space-y-3 max-w-[90ch] text-sm sm:text-base">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-6">
          {/* Live Demo Links - Only rendered if present */}
          {links.live && links.live.length > 0 && (
            <>
              <div className="flex flex-wrap gap-3 items-center mb-4">
                {links.live.map((link) => (
                  <a 
                    key={link.text}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-violet-600 overflow-hidden text-sm sm:text-base"
                  >
                    <span className="relative z-10">{link.text}</span>
                    <FaExternalLinkAlt className="w-4 h-4 relative z-10" />
                    <div className="absolute inset-0 bg-violet-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                ))}
              </div>
              <div className="h-px bg-gray-700/50 mb-4" />
            </>
          )}

          {/* GitHub Links */}
          <div className="flex flex-wrap gap-3 items-center">
            {links.github.map((link) => (
              <a 
                key={link.text}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-violet-500 hover:bg-violet-500/10 transition-colors text-sm sm:text-base"
              >
                <span>{link.text}</span>
                <FaGithub size={16} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-violet-500 transition-colors"
            >
              Close
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectComponent;