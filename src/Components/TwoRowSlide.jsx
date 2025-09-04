import React from "react";
import myImage from "../assets/pic3.avif"; // Replace with your image
import SplitText from "./SplitText";


const TwoRowSlide = () => {
  return (
    <div className="min-h-screen bg-[#FEF9EF] flex flex-col p-10 gap-44">
      
      {/* First Row: Text Card */}
      <div className="w-full max-w-4xl rounded-xl">
  <div>
    <SplitText
      text="Connecting Hearts  and Helping Hands"
      className="text-8xl font-bold text-[#5E362C] mb-4"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />

    <SplitText
      text="  Building a better future through compassion"
      className="text-2xl text-[#5E362C] pl-8"
      delay={300}
      duration={0.6}
      ease="power3.out"
      splitType="words"
      from={{ opacity: 0, y: 20 }}
      to={{ opacity: 1, y: 0 }}
    />
  </div>
</div>

      {/* Second Row: Two Columns */}
      <div className="w-full  grid grid-cols-2 gap-6">
        {/* Left Column: Image */}
        <div className="rounded-xl  p-8 flex flex-col justify-center">
          <p className=" text-xl text-[#5E362C] mb-8 ">
            This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
          </p>
          <p className="text-xl text-[#5E362C] mb-8">
           Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.
          </p>

         <a className="btn w-1/4 bg-[#5E362C] text-white text-xl rounded-3xl px-2 py-6
              hover:bg-white hover:text-[#5E362C] transition-colors duration-300">
            Our Story
       </a>
        </div>



       

        {/* Right Column: Card */}
         <div className="w-full">
          <img
            src={myImage}
            alt="Illustration"
            className="w-full h-auto object-cover rounded-4xl shadow-lg"
          />
        </div>
        
      </div>

    </div>
  );
};

export default TwoRowSlide;
