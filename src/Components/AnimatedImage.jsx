import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ src, alt }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      {
        borderRadius: "9999px", // fully rounded circle
        scale: 0.8,             // smaller at the start
      },
      {
        borderRadius: "1rem",   // morph into rounded rectangle
        scale: 1,               // full size
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",   // starts when image enters viewport
          end: "top 5%",     // ends when scrolled further
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="w-full h-auto object-cover shadow-lg"
    />
  );
};

export default AnimatedImage;
