"use client";
import { useState, useEffect } from "react";
import { layer1In6, layer2In6, layer3In6, layer4In6 } from "./data/in-6";

export default function Tutor() {
  // State for layers
  const [layer1, setLayer1] = useState("");
  const [layer2, setLayer2] = useState("");
  const [layer3, setLayer3] = useState("");
  const [layer4, setLayer4] = useState("");

  // Function to randomize layers
  const randomizeLayers = () => {
    setLayer1(layer1In6[Math.floor(Math.random() * layer1In6.length)]);
    setLayer2(layer2In6[Math.floor(Math.random() * layer2In6.length)]);
    setLayer3(layer3In6[Math.floor(Math.random() * layer3In6.length)]);
    setLayer4(layer4In6[Math.floor(Math.random() * layer4In6.length)]);
  };

  // Set initial random values on client side
  useEffect(() => {
    randomizeLayers();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center flex flex-col items-center">
        
        <div className="font-mono text-lg">{layer1}</div>        
        <div className="font-mono text-lg mt-2">{layer2}</div>
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
