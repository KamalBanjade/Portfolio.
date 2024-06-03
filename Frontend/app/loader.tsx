import React, { useState, useEffect } from 'react';


const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div
          id="loader"
          style={{
            backgroundColor: '#0a192f',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 999,
          }}
        >
          <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 50,10 50,10 50,10 50,10 50,10" fill="none" stroke="#00b894" strokeWidth="5">
              <animate
                id="line1"
                attributeName="points"
                dur="0.3s"
                from="50,10 50,10 50,10 50,10 50,10 50,10"
                to="50,10 85,32 50,10 50,10 50,10 50,10"
                begin="0s"
                fill="freeze"
              />
              <animate
                id="line2"
                attributeName="points"
                dur="0.3s"
                from="50,10 85,32 50,10 50,10 50,10 50,10"
                to="50,10 85,32 85,68 50,90 50,10 50,10"
                begin="line1.end"
                fill="freeze"
              />
              <animate
                id="line3"
                attributeName="points"
                dur="0.3s"
                from="50,10 85,32 85,68 50,90 50,10 50,10"
                to="50,10 85,32 85,68 50,90 15,68 50,10"
                begin="line2.end"
                fill="freeze"
              />
              <animate
                id="line4"
                attributeName="points"
                dur="0.3s"
                from="50,10 85,32 85,68 50,90 15,68 50,10"
                to="50,10 85,32 85,68 50,90 15,68 15,32"
                begin="line3.end"
                fill="freeze"
              />
              <animate
                id="line5"
                attributeName="points"
                dur="0.3s"
                from="50,10 85,32 85,68 50,90 15,68 15,32"
                to="50,10 85,32 85,68 50,90 15,68 15,32"
                begin="line4.end"
                fill="freeze"
              />
            </polygon>
            <text
              x="50"
              y="53"
              fontSize="30px"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#64ffda"
              className=" font-bold opacity-0 animate-fade-in"
            >
              <animate attributeName="opacity" from="0" to="1" dur="1s" begin="line5.end" fill="freeze" />
              K
            </text>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Loader;
