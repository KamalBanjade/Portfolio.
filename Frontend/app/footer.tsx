import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] py-6 text-center">
      <p className="text-[#8892b0] text-xs sm:text-sm">
        Designed & Built by Kamal Banjade
      </p>
      <p className="text-[#8892b0] text-xs sm:text-sm mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
