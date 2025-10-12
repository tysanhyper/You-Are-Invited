import React from 'react';

const VineAccents: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left side vines */}
      <svg
        className="absolute left-0 top-1/4 w-32 h-64 opacity-20"
        viewBox="0 0 128 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 0C64 0 32 32 32 64C32 96 64 128 64 160C64 192 32 224 32 256"
          stroke="#C6754D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M64 0C64 0 96 32 96 64C96 96 64 128 64 160C64 192 96 224 96 256"
          stroke="#C6754D"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="32" cy="64" r="3" fill="#6B2C2C" />
        <circle cx="96" cy="96" r="3" fill="#6B2C2C" />
        <circle cx="32" cy="160" r="3" fill="#6B2C2C" />
        <circle cx="96" cy="192" r="3" fill="#6B2C2C" />
      </svg>

      {/* Right side vines */}
      <svg
        className="absolute right-0 top-1/3 w-32 h-64 opacity-20"
        viewBox="0 0 128 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 0C64 0 32 32 32 64C32 96 64 128 64 160C64 192 32 224 32 256"
          stroke="#C6754D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M64 0C64 0 96 32 96 64C96 96 64 128 64 160C64 192 96 224 96 256"
          stroke="#C6754D"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="32" cy="64" r="3" fill="#6B2C2C" />
        <circle cx="96" cy="96" r="3" fill="#6B2C2C" />
        <circle cx="32" cy="160" r="3" fill="#6B2C2C" />
        <circle cx="96" cy="192" r="3" fill="#6B2C2C" />
      </svg>

      {/* Corner vines */}
      <svg
        className="absolute top-0 left-1/4 w-24 h-32 opacity-15"
        viewBox="0 0 96 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 0C48 0 24 24 24 48C24 72 48 96 48 120C48 144 24 168 24 192"
          stroke="#C6754D"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="24" cy="48" r="2" fill="#6B2C2C" />
        <circle cx="48" cy="96" r="2" fill="#6B2C2C" />
      </svg>

      <svg
        className="absolute bottom-0 right-1/4 w-24 h-32 opacity-15"
        viewBox="0 0 96 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 128C48 128 24 104 24 80C24 56 48 32 48 8C48 -16 24 -40 24 -64"
          stroke="#C6754D"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="24" cy="80" r="2" fill="#6B2C2C" />
        <circle cx="48" cy="32" r="2" fill="#6B2C2C" />
      </svg>
    </div>
  );
};

export default VineAccents;
