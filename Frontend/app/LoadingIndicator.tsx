import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center z-10">
            <span className="text-4xl font-bold text-[#00b894] animate-fade-in">K</span>
          </div>
        </div>
        <div className="absolute inset-0 animate-build-hexagon">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="transparent" points="50,10 85,35 85,65 50,90 15,65 15,35" stroke="#00b894" strokeWidth="5" />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 2s forwards;
        }

        .animate-build-hexagon {
          animation: buildHexagon 2s forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes buildHexagon {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingIndicator;
