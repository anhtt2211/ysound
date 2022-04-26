import React from 'react';
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';
import { playLists } from '@data/playlists';
import { useAppDispatch } from '@redux/hooks';
import { IPlayList } from '@domain/models/playlist';
import { getPlayList } from '@redux/slices/play-list.slice';
// const playLists = [
//   {
//     id: 1,
//     name: 'Study with me',
//   },
//   {
//     id: 2,
//     name: 'Calm before the Storm',
//   },
//   {
//     id: 3,
//     name: 'They move on Tracks of Never-Ending Light',
//   },
//   {
//     id: 4,
//     name: 'You & me',
//   },
//   {
//     id: 5,
//     name: 'Chill tracks',
//   },
//   {
//     id: 6,
//     name: 'Daily mix',
//   },
//   {
//     id: 7,
//     name: 'Điều buồn nhất',
//   },
// ];

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const onPlayListClick = (playList: IPlayList) => {
    dispatch(getPlayList(playList));
  };

  return (
    <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-500 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-500" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Add playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Like Songs</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-500" />

        {/* play list */}
        {playLists.map((playList) => (
          <p
            className="hover:text-white cursor-pointer"
            key={playList.id}
            onClick={() => onPlayListClick(playList)}
          >
            {playList.name}
          </p>
        ))}
      </div>
    </div>
  );
};
