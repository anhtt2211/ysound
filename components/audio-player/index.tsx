import { useAppContext } from '@app/app-context';
import imgPlayList from '@assets/images/img-playList.jpg';
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline';
import { BiShuffle } from 'react-icons/bi';
import React, { useEffect, useRef, useState } from 'react';

export const Audio = () => {
  const [volumn, setVolumn] = useState<number>(50);
  const audio = useRef<HTMLAudioElement>();
  const {
    currentSong,
    isPlaying,
    isShuffle,
    setIsShuffle,
    setIsPlaying,
    nextSong,
    prevSong,
  } = useAppContext();
  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);
  console.log(audio.current);
  const handlePrevSong = () => {
    prevSong();
  };

  const handleNextSong = () => {
    nextSong();
  };

  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="flex items-center space-x-4">
        {currentSong && (
          <img
            src={currentSong?.links.images[0].url}
            alt=""
            className="w-10 h-10 object-cover"
          />
        )}

        <div>
          <p>{currentSong?.name || ''}</p>
          <p>{currentSong?.author || ''}</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        {!isShuffle ? (
          <SwitchHorizontalIcon
            className="button"
            onClick={() => setIsShuffle(!isShuffle)}
          />
        ) : (
          <BiShuffle
            className="button"
            onClick={() => setIsShuffle(!isShuffle)}
          />
        )}
        <RewindIcon className="button" onClick={handlePrevSong} />

        {isPlaying === true ? (
          <PauseIcon
            onClick={() => setIsPlaying(false)}
            className="button w-10 h-10"
          />
        ) : (
          <PlayIcon
            onClick={() => setIsPlaying(true)}
            className="button w-10 h-10"
          />
        )}

        <FastForwardIcon className="button" onClick={handleNextSong} />
        {/* <ReplyIcon className="button" /> */}
      </div>

      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <VolumeUpIcon className="button" />
        <input
          className="w-14 md:w-28"
          type="range"
          min={0}
          max={100}
          value={volumn}
          onChange={(e) => setVolumn(Number(e.target.value))}
        />
        <VolumeOffIcon className="button" />
      </div>
      <audio src={currentSong?.url || ''} ref={audio} autoPlay />
    </div>
  );
};
