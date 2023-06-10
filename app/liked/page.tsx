import getLikedSongs from "@/actions/get-liked-songs";
import Header from "@/components/header";
import Image from "next/image";
import LikedContent from "./components/liked-content";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div className="w-full h-full bg-neutral-900 rounded-lg overflow-hiddedn overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                src="/images/liked.png"
                alt="Playlist"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-x-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl">
                Liked songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
