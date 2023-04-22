import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import Slider from "~/components/Slider";
import DisableInactive from "~/layouts/DisableInactive";

export default function Compare() {
  const [opacity, setOpacity] = useState(0.5);
  const [isFirstTop, setIsFirstTop] = useState(false);
  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);

  function handleSliderChange(e: any) {
    setOpacity(e.target.value);
  }

  return (
    <>
      <main>
        <div
          className="min-h-screen"
          style={{ "--opacity": `${opacity}` } as CSSProperties}
        >
          <iframe
            className={`absolute h-full w-full ${
              isFirstTop
                ? "z-10 bg-[#ff64be] opacity-[--opacity] mix-blend-difference"
                : ""
            }`}
            src="https://oh.studio/"
          ></iframe>
          <iframe
            className={`absolute h-full w-full ${
              !isFirstTop
                ? "z-10 bg-[#ff64be] opacity-[--opacity] mix-blend-difference"
                : ""
            }`}
            src="https://oh-studio-next.vercel.app/"
          ></iframe>
        </div>
        <div className="absolute bottom-10 z-50 w-full max-w-sm px-10">
          <DisableInactive>
            <Slider
              min={0}
              max={1}
              step={0.01}
              defaultValue={0.5}
              onChange={handleSliderChange}
              style={
                { "--track-filling": `${opacity * 100}%` } as CSSProperties
              }
            />
          </DisableInactive>
        </div>
        <div className="absolute right-10 top-10 z-50">
          <button className="rounded-full border-2 border-blue-900 px-5 py-2" onClick={() => setIsFirstTop(!isFirstTop)}>
            Click
          </button>
        </div>
      </main>
    </>
  );
}
