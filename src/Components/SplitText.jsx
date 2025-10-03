import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 0.05,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars', // 'chars' | 'words'
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'left',
  tag = 'p',
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait for fonts to load before animating
  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  // Split text for rendering
  const splitContent = text.split('\n').map((line, i) => (
    <div key={i} style={{ display: 'block' }}>
      {splitType === 'chars'
        ? line.split('').map((char, j) => (
            <span key={j} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))
        : // For words, preserve spaces
          line.split(/(\s+)/).map((word, j) => (
            <span key={j} className="inline-block">
              {word === ' ' ? '\u00A0' : word}
            </span>
          ))}
      {i !== text.split('\n').length - 1 && <br />}
    </div>
  ));

  // GSAP animation
  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;

      let targets;
      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: false,
        charsClass: 'split-char',
        wordsClass: 'split-word',
        linesClass: 'split-line',
        reduceWhiteSpace: false,
        onSplit: (self) => {
          targets =
            (splitType === 'chars' && self.chars) ||
            (splitType === 'words' && self.words) ||
            self.chars;
          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay,
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onComplete: onLetterAnimationComplete,
              willChange: 'transform, opacity',
              force3D: true,
            }
          );
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = null;
      };
    },
    { dependencies: [text, delay, duration, ease, splitType, fontsLoaded] , scope: ref}
  );

  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={`split-parent inline-block overflow-hidden whitespace-pre-line ${className}`}
      style={{ textAlign }}
    >
      {splitContent}
    </Tag>
  );
};

export default SplitText;
