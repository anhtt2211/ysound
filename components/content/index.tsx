import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import avatar from '@assets/images/dog.jpg';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from 'lodash';
import imgPlayList from '@assets/images/img-playList.jpg';
import { Songs } from '@components/songs';
import { useAppSelector } from '@redux/hooks';

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];

export const Content = () => {
  const [color, setColor] = useState<string>();
  const { current } = useAppSelector((state) => state.playLists);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex flex-col flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-zinc-900 space-x-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
          <Image
            className="rounded-full"
            src={avatar}
            width={30}
            height={30}
            alt="avatar"
          />
          <h2>The Anh</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}
      >
        {/* <Image
          src={imgPlayList}
          alt=""
          width={232}
          height={232}
          objectFit="cover"
        /> */}
        <img src={current?.image} alt="" className="w-56 h-56 object-cover" />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {current?.name}
          </h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </div>
  );
};
