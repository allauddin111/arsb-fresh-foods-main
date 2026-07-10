export function WhatsAppButton() {
  const phoneNumber = "971566090684";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70%  { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes wa-icon-bounce {
          0%, 100% { transform: scale(1); }
          40%       { transform: scale(1.18) rotate(-8deg); }
          60%       { transform: scale(1.12) rotate(5deg); }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .wa-btn {
          animation: wa-pulse 2.4s ease infinite, wa-float 4s ease-in-out infinite;
        }
        .wa-btn:hover {
          animation: wa-pulse 1.2s ease infinite;
        }
        .wa-btn:hover .wa-icon {
          animation: wa-icon-bounce 0.5s ease;
        }
        .wa-tooltip {
          opacity: 0;
          pointer-events: none;
          transform: translateX(8px);
          transition: opacity 0.2s ease, transform 0.25s ease;
          white-space: nowrap;
        }
        .wa-btn:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
          animation: wa-tooltip-in 0.25s ease forwards;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip */}
        <div className="wa-tooltip flex items-center gap-1.5 bg-leaf-deep text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl shadow-leaf-deep/30">
          <span>Chat on WhatsApp</span>
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1db954] transition-colors duration-200"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <span className="wa-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="30"
              height="30"
              fill="white"
              aria-hidden="true"
            >
              <path d="M16.003 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.364.633 4.674 1.833 6.695L2.667 29.333l6.82-1.789A13.275 13.275 0 0 0 16.003 29.333C23.368 29.333 29.333 23.363 29.333 16S23.368 2.667 16.003 2.667zm0 2.4c5.93 0 10.933 5.003 10.933 10.933S21.933 26.933 16.003 26.933a10.9 10.9 0 0 1-5.632-1.564l-.403-.244-4.047 1.062 1.08-3.944-.266-.418A10.893 10.893 0 0 1 5.07 16C5.07 10.07 10.073 5.067 16.003 5.067zm-3.09 4.8c-.22 0-.577.082-.879.409-.302.328-1.153 1.126-1.153 2.748s1.18 3.188 1.345 3.41c.165.22 2.31 3.667 5.676 4.997 2.808 1.11 3.375.89 3.983.835.608-.055 1.961-.8 2.238-1.574.275-.773.275-1.436.192-1.574-.082-.137-.302-.22-.632-.385-.33-.165-1.961-.968-2.264-1.078-.302-.11-.522-.165-.742.165-.22.33-.853 1.078-1.046 1.298-.192.22-.385.248-.715.083-.33-.165-1.394-.514-2.657-1.639-.982-.874-1.644-1.954-1.837-2.284-.192-.33-.02-.508.145-.672.148-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.082-.165-.737-1.796-1.016-2.455-.266-.64-.538-.55-.742-.56-.192-.008-.41-.01-.632-.01z" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
