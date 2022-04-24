import { IPlayList } from '@domain/models/playlist';
import songs from './songs.json';

// get 10 element from songs

export const playlists: IPlayList[] = [
  {
    id: 1,
    name: 'Playlist 1',
    songs: songs.slice(0, 10),
  },
];
