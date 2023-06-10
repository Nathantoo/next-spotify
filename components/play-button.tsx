import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="flex items-center justify-center rounded-full drop-shadow-sm bg-green-500 transition opacity-0 translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 p-4 hover:scale-110">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
