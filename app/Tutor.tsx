"use client";
import { useState } from "react";

import { layer1In6 } from "./data/in-6";
import { layer3In6 } from "./data/in-6";
import { layer4In6 } from "./data/in-6";

export default function Tutor() {
  // State for layer1 and layer4
  const [layer1, setLayer1] = useState(layer1In6[Math.floor(Math.random() * layer1In6.length)]);
  const [layer3, setLayer3] = useState(layer3In6[Math.floor(Math.random() * layer3In6.length)]);
  const [layer4, setLayer4] = useState(layer4In6[Math.floor(Math.random() * layer4In6.length)]);

  // Function to randomize both layer1 and layer4
  const randomizeLayers = () => {
    const randomLayer1 = layer1In6[Math.floor(Math.random() * layer1In6.length)];
    const randomLayer3 = layer3In6[Math.floor(Math.random() * layer3In6.length)];
    const randomLayer4 = layer4In6[Math.floor(Math.random() * layer4In6.length)];
    setLayer1(randomLayer1);
    setLayer3(randomLayer3);
    setLayer4(randomLayer4);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center flex flex-col items-center">
        
        <div className="font-mono text-lg">{layer1}</div>        
        <div className="font-mono text-lg mt-2">{layer3}</div>
        <div className="font-mono text-lg mt-2">{layer4}</div>
        
        <button
          onClick={randomizeLayers}
          className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Randomise
        </button>

      </div>
    </main>
  );
}