import React from "react";
import SplitText from "./SplitText"; // your custom SplitText component

const SecondScroll = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="bg-[#FCFB71] w-full">
      <div className="mt-34 ">
        {/* Animated h1 */}
        <SplitText
  text={`Supporting Our\nCommunity Together`}
  className="text-9xl text-[#5E362C] px-8 whitespace-pre-line font-gloock"
  delay={0.05}
  duration={0.6}
  ease="power3.out"
  splitType="chars"   // ✅ Correct prop name
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  textAlign="left"
  onLetterAnimationComplete={handleAnimationComplete}
  tag="h1"
/>

<SplitText
  text="We can connect hearts, transform lives and foster a sense of belonging for everyone"
  className="mt-8 text-2xl px-10 text-[#5E362C]"
  delay={0.1}
  duration={0.6}
  ease="power3.out"
  splitType="words"   // ✅ Correct prop name
  from={{ opacity: 0, y: 20 }}
  to={{ opacity: 1, y: 0 }}
  textAlign="left"
  onLetterAnimationComplete={handleAnimationComplete}
/>

      </div>
    </div>
  );
};

export default SecondScroll;
