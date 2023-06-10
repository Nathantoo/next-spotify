"use client";
import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className="relative w-full h-10 flex items-center select-none touch-none"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track className="relative bg-neutral-600 h-[3px] grow rounded-full">
        <RadixSlider.Range className="absolute bg-white h-full rounded-full" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
