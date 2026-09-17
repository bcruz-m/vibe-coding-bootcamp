"use client";

import { useEffect, useState } from "react";

export default function ShimmerQuote({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight shimmer-text">
        &bdquo;{displayedText}
        <span className="typing-cursor">|</span>&ldquo;
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
