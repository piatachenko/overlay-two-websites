import { CSSProperties } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange?: (event: any) => void;
  style?: CSSProperties;
}

export default function Slider({ ...props }: SliderProps) {
  return (
    <>
      <input
        type="range"
        className="w-full appearance-none rounded-full bg-transparent outline-none [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gradient-to-r [&::-webkit-slider-runnable-track]:from-[#435cfa] [&::-webkit-slider-runnable-track]:from-[percentage:--track-filling] [&::-webkit-slider-runnable-track]:to-[#dfdfdf] [&::-webkit-slider-runnable-track]:to-[percentage:--track-filling] [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#435CFA] focus:[&::-webkit-slider-thumb]:ring"
        {...props}
      />
    </>
  );
}
