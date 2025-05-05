const VideoTimeline = ({ versions, onVersionSelect, currentVersion }) => {
  return (
    <div className="w-full mb-4">
      {/* Timeline Container */}
      <div className="relative pt-2 pb-2">
        {/* Timeline Line */}
        <div className="absolute left-0 right-0 top-[26px] h-[2px] bg-gray-700"></div>
        
        {/* Version Markers */}
        <div className="relative flex justify-between w-full pt-3">
          {versions.map((version) => (
            <button
              key={version.publicId}
              onClick={() => onVersionSelect(version)}
              className={`relative flex flex-col items-center group ${
                currentVersion.publicId === version.publicId 
                  ? 'text-violet-500' 
                  : 'text-gray-400 hover:text-violet-400'
              }`}
            >
              {/* Marker */}
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 mb-2 ${
                  currentVersion.publicId === version.publicId
                    ? 'bg-violet-500 border-violet-500'
                    : 'bg-gray-900 border-gray-700 group-hover:border-violet-400'
                }`}
              />
              
              {/* Label */}
              <span className="text-sm font-medium whitespace-nowrap">
                {version.label}
              </span>
              
              {/* Date */}
              <span className="text-xs opacity-75 mt-1">
                {version.date}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTimeline; 