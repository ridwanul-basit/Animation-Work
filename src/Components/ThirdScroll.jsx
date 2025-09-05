// ThirdScroll.jsx
import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import ScrollReveal from "./ScrollReveal";

const ThirdScroll = () => {
  return (
    <div className="grid grid-cols-2 bg-[#FEF9EF] gap-6 p-6">
      {/* Left column with ScrollReveal animations */}
      <div className="flex flex-col h-screen sticky top-0">
        <ScrollReveal
          Tag="h1"
          baseOpacity={0}
          enableBlur={true}
          blurStrength={10}
          containerClassName="max-w-lg"
          textClassName="text-7xl text-[#5E362C] font-bold font-gloock leading-tight"
        >
          Our Core Initiatives
        </ScrollReveal>

        <ScrollReveal
          Tag="p"
          baseOpacity={0}
          enableBlur={true}
          blurStrength={6}
          containerClassName="max-w-lg"
          textClassName="text-xl text-[#5E362C] font-gloock"
        >
          Empowering change for a brighter tomorrow
        </ScrollReveal>
      </div>

      {/* Right column with stacked sticky cards */}
      <div className="relative">
        <div className="space-y-6">
          <div className="sticky top-0 h-screen flex">
            <FirstCard />
          </div>
          <div className="sticky top-0 h-screen flex">
            <SecondCard />
          </div>
          <div className="sticky top-0 h-screen flex">
            <ThirdCard />
          </div>
          <div className="sticky top-0 h-screen flex">
            <FourthCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdScroll;
