"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    //Add Authentication!
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative flex group items-center overflow-hidden pr-4 gap-x-4 rounded-md bg-neutral-100/10 hover:bg-neutral-100/20 transition"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="Image" fill className="object-cover" />
      </div>
      <p className="truncate font-medium py-5">{name}</p>
      <div className="absolute right-5 opacity-0 group-hover:opacity-100 rounded-full drop-shadow-md flex items-center justify-center p-4 bg-green-500 hover:scale-110 transition">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
