import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import Button from "~/components/Button";
import Slider from "~/components/Slider";
import DisableInactive from "~/layouts/DisableInactive";

export default function Compare() {
  const [opacity, setOpacity] = useState(0.5);
  const [isFirstFront, setIsFirstFront] = useState(false);

  const router = useRouter();
  const { url1, url2 } = router.query;
  if (router.isReady && (!url1 || !url2)) {
    router.push("/");
  }

  function handleSliderChange(e: any) {
    setOpacity(e.target.value);
  }

  function handleClick() {
    setIsFirstFront(!isFirstFront);
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
              isFirstFront
                ? "z-10 bg-[#ff64be] opacity-[--opacity] mix-blend-difference"
                : ""
            }`}
            src={url1?.toString()}
          ></iframe>
          <iframe
            className={`absolute h-full w-full ${
              !isFirstFront
                ? "z-10 bg-[#ff64be] opacity-[--opacity] mix-blend-difference"
                : ""
            }`}
            src={url2?.toString()}
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
          <DisableInactive>
            <Button onClick={handleClick} variant="primary">
              <span>Click</span>
            </Button>
          </DisableInactive>
        </div>
      </main>
    </>
  );
}
