import React, { useState } from 'react';

const Events = () => {
  const rows = [
    { day: 'Thu', date: 'Jan 25', event: 'Charity Gala', something: '/ San Francisco, CA, USA' },
    { day: 'Thu', date: 'Oct 18', event: 'Volunteer Drive', something: '/ San Francisco, CA, USA' },
    { day: 'Mon', date: 'Dec 10', event: 'Fundraising Marathon', something: '/ San Francisco, CA, USA' },
  ];

  return (
    <div className="p-10 bg-[#FCFB71] space-y-6">
      {/* Header */}
      <div className="mb-24">
        <h1 className="text-8xl font-bold text-[#5E362C]">Upcoming Events</h1>
        <p className="text-2xl text-[#5E362C] mt-3">Mark your calendar</p>
      </div>

      {/* Row section */}
      <div className="space-y-6">
        {rows.map((row, index) => (
          <div key={index} className="flex flex-col">
            {/* Top HR for 1st and 3rd rows */}
            {(index === 0 || index === 2) && (
              <hr className="border border-[#5E362C] mb-2" />
            )}

            {/* Event card */}
            <div className="flex justify-between items-center p-6 ">
              {/* Left side: Day, Date, Event Name + Something */}
              <div className="flex flex-col space-y-1">
                <span className="text-xl  text-[#5E362C]">
                  {row.day}, {row.date}
                </span>
                <div className="flex items-center gap-4 relative">
                  <span className="text-2xl font-semibold text-[#5E362C]" style={{ fontFamily: 'Gloock, serif' }}>
                    {row.event}
                  </span>
                  <HoverReplace text={row.something} />
                </div>
              </div>

              {/* Right side: Buy Tickets button */}
              <button className="px-6 py-3 text-xl rounded-3xl bg-[#5E362C] text-white 
                hover:bg-white hover:text-[#5E362C] transition-colors duration-300">
                Buy Tickets
              </button>
            </div>

            {/* Bottom HR for 1st and 3rd rows */}
            {(index === 0 || index === 2) && (
              <hr className="border border-[#5E362C] mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Hover replaces text fully with ^
const HoverReplace = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="text-lg text-[#5E362C] cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={`transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        {text}
      </span>
      <span className={`absolute top-0 left-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        ^
      </span>
    </span>
  );
};

export default Events;
