export function InstagramButton() {
  const instagramHandle = "arsbtradingllc";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  return (
    <>
      <style>{`
        @keyframes ig-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.6); }
          70%  { box-shadow: 0 0 0 18px rgba(225, 48, 108, 0); }
          100% { box-shadow: 0 0 0 0 rgba(225, 48, 108, 0); }
        }
        @keyframes ig-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes ig-icon-bounce {
          0%, 100% { transform: scale(1); }
          40%       { transform: scale(1.18) rotate(-8deg); }
          60%       { transform: scale(1.12) rotate(5deg); }
        }

        .ig-btn {
          animation: ig-pulse 2.4s ease infinite, ig-float 4s ease-in-out infinite;
          animation-delay: -2s;
        }
        .ig-btn:hover {
          animation: ig-pulse 1.2s ease infinite;
        }
        .ig-btn:hover .ig-icon {
          animation: ig-icon-bounce 0.5s ease;
        }
      `}</style>

      <div className="group flex items-center gap-3">
        {/* Tooltip */}
        <div className="opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap flex items-center gap-1.5 bg-leaf-deep text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl shadow-leaf-deep/30">
          <span>Visit Instagram Profile</span>
        </div>

        {/* Button */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-btn flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg hover:brightness-110 transition-all duration-200"
          aria-label="Visit Instagram profile (@arsbtradingllc)"
          title="Visit our Instagram profile @arsbtradingllc"
        >
          <span className="ig-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
