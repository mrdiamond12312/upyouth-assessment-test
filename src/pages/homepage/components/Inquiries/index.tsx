import React from 'react';
import { Link } from 'react-router-dom';

const Inquiries: React.FC = () => {
  return (
    <div className="relative overflow-hidden pb-[240px] pt-[120px] text-center text-xl font-bold md:text-6xl">
      <h1>Further inquiries?</h1>
      <Link
        to="https://www.linkedin.com/company/upyouth/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>
          Text us at <span className="text-blue-700">UpYouth LinkedIn</span>
        </div>
      </Link>
      <img
        src="/arcs/arc1.png"
        className="absolute -bottom-[200px] right-0 z-10 w-[384px] translate-x-1/2 transform"
      ></img>
    </div>
  );
};

export default Inquiries;
