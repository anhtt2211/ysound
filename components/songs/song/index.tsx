/* eslint-disable @next/next/no-img-element */
import { useAppContext } from '@app/app-context';
import { ILinks } from '@domain/models/song';
import React from 'react';

type Props = {
  id: number;
  order: number;
  name: string;
  author: string;
  albumName?: string;
  duration?: string;
  image?: string;
  url: string;
  links: ILinks;
};

export const Song = ({ order, name, author, image, url, links, id }: Props) => {
  const { currentSong, setCurrentSong, setIsPlaying } = useAppContext();

  const onSongClick = () => {
    setCurrentSong({
      id,
      name,
      author,
      image,
      url,
      links,
    });
    setIsPlaying(true);
  };

  return (
    <>
      <div
        onClick={onSongClick}
        className={`grid grid-cols-2 text-gray-500 py-4 px-7 hover:bg-gray-900 rounded-lg cursor-pointer ${
          currentSong?.id === id ? '!bg-gray-900' : ''
        }`}
      >
        <div className="flex items-center space-x-5">
          <p className="mr-4">{order}</p>
          <img src={image} alt="" className="w-10 h-10 object-cover" />

          <div>
            <p className="w-36 lg:w-64 truncate text-white">{name}</p>
            <p className="w-40">{author}</p>
          </div>
        </div>
      </div>
    </>
  );
};
