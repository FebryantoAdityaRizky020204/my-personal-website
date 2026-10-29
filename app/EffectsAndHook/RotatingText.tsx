"use client";

import { useEffect, useState } from "react";

// Kata yang berganti-ganti (gaya Rotating Text)
function RotatingText({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span key={i} className="role-in inline-block font-semibold text-sky-300">
      {words[i]}
    </span>
  );
}

export default RotatingText;
