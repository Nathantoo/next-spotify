"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    return player.setId(data.id);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 p-2 rounded-md hover:bg-neutral-800/50 w-full cursor-pointer"
    >
      <div className="relative overflow-hidden min-h-[48px] min-w-[48px] rounded-md">
        <Image
          src={imageUrl || "/images/liked.png"}
          alt="Media Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 truncate text-sm">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
