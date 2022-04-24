import { ISong } from '@domain/models/song';
import { createContext, useContext, useState } from 'react';
import songsData from '@data/songs.json';

interface Context {
  currentSong?: ISong;
  isPlaying?: boolean;
  isShuffle?: boolean;
  setIsShuffle?: Function;
  setCurrentSong?: Function;
  setIsPlaying?: Function;
  nextSong?: Function;
  prevSong?: Function;
}

const AppContext = createContext<Context | undefined>(undefined);

export const AppProvider = (props) => {
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [songs, setSongs] = useState<ISong[]>(songsData);
  const [currentSong, setCurrentSong] = useState<ISong>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const nextSong = () => {
    if (!isShuffle) {
      if (currentSong.id === songs.length - 1) {
        setCurrentSong(songs[0]);
      } else {
        const nextSong = songs.find((song) => song.id === currentSong?.id + 1);
        setCurrentSong(nextSong);
      }
    } else {
      const nextSong = songs[Math.floor(Math.random() * songs.length)];
      setCurrentSong(nextSong);
    }
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (!isShuffle) {
      if (currentSong.id === 0) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        const prevSong = songs.find((song) => song.id === currentSong?.id - 1);
        setCurrentSong(prevSong);
      }
    } else {
      const prevSong = songs[Math.floor(Math.random() * songs.length)];
      setCurrentSong(prevSong);
    }

    setIsPlaying(true);
  };

  const value = {
    currentSong,
    isPlaying,
    isShuffle,
    setIsShuffle,
    setCurrentSong,
    setIsPlaying,
    nextSong,
    prevSong,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
