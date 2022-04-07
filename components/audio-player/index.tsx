import Image from 'next/image';
import React, { useState } from 'react';
// import AudioPlayer from 'react-h5-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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

export const Audio = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volumn, setVolumn] = useState<number>(50);

  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* left */}
      <div className="flex items-center space-x-4">
        <Image src={imgPlayList} height={40} width={40} alt="" />

        <div>
          <p>Take me to your heart</p>
          <p>Taylor</p>
        </div>
      </div>

      {/* center */}
      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button" />
        <RewindIcon className="button" />

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

        <FastForwardIcon className="button" />
        <ReplyIcon className="button" />
      </div>

      {/* right */}
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

      {/* <AudioPlayer
        autoPlay
        src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
        onPlay={(e) => console.log('onPlay')}
        // other props here
      /> */}
    </div>
  );
};
