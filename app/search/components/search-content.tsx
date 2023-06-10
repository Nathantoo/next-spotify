"use client";

import LikeButton from "@/components/like-button";
import MediaItem from "@/components/media-item";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return (
      <div className="px-6 flex flex-col gap-y-2 w-full">No songs found</div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 px-6 w-full">
      {songs.map((song) => (
        <div key={song.id} className="flex gap-x-4 w-full items-center">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
