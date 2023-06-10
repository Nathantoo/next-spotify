"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";
import Image from "next/image";
import PlayButton from "./play-button";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative flex flex-col items-center justify-center group bg-neutral-400/5 hover:bg-neutral-400/10 cursor-pointer rounded-md p-3 gap-x-4 transition overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden w-full h-full rounded-md">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col w-full items-start pt-4 gap-y-1">
        <p className="w-full font-semibold truncate">{data.title}</p>
        <p className="text-sm text-neutral-400 truncate pb-4">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
