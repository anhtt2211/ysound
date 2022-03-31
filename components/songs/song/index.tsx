import React from 'react';
import imgPlayList from '@assets/images/img-playList.jpg';
import Image from 'next/image';

type Props = {
  order: number;
  name: string;
  artist: string;
  albumName: string;
  duration: string;
};

export const Song = ({ order, name, artist, albumName, duration }: Props) => {
  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-7 hover:bg-gray-900 rounded-lg cursor-pointer">
      <div className="flex items-center space-x-5">
        <p className="mr-4">{order}</p>
        <Image src={imgPlayList} alt="" height={40} width={40} />

        <div>
          <p className="w-36 lg:w-64 truncate text-white">{name}</p>
          <p className="w-40">{artist}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline w-40">{albumName}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};
