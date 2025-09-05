// ScrollReveal.jsx
import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  Tag = "p", // Custom tag support
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  // Split text or JSX children into words and apply textClassName to each word
  const splitText = useMemo(() => {
    if (typeof children === "string") {
      return children.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word; // keep spaces
        return (
          <span
            className={`inline-block word ${textClassName}`} // <- apply textClassName here
            key={index}
          >
            {word}
          </span>
        );
      });
    } else {
      return React.Children.map(children, (child, index) => {
        if (typeof child === "string") {
          return (
            <span className={`inline-block word ${textClassName}`} key={index}>
              {child}
            </span>
          );
        }
        return child;
      });
    }
  }, [children, textClassName]);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safety
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Rotation animation
    const rotationTween = gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    // Opacity animation
    const opacityTween = gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    // Blur animation
    let blurTween;
    if (enableBlur) {
      blurTween = gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      rotationTween.scrollTrigger?.kill();
      opacityTween.scrollTrigger?.kill();
      blurTween?.scrollTrigger?.kill();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <Tag
        className={`overflow-hidden inline-block whitespace-normal ${textClassName}`}
      >
        {splitText}
      </Tag>
    </div>
  );
};

export default ScrollReveal;
