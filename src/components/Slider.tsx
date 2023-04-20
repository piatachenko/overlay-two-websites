// interface SliderProps {
//   min: number;
//   max: number;
//   step: number;
//   defaultValue: number;
//   onChange: () => void;
// }

export default function Slider({ ...props }) {
  return (
    <>
      <input
        type="range"
        name="slider"
        id="slider"
        {...props}
      />
    </>
  );
}
