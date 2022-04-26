import { IPlayList } from '@domain/models/playlist';
import songs from './songs.json';

// get 10 element from songs

export const playLists: IPlayList[] = [
  {
    id: 1,
    name: 'Study with me',
    image: 'https://unsplash.com/photos/CeW--PHwpGc',
    songs: songs.slice(0, 14),
  },
  {
    id: 2,
    name: 'Calm before the Storm',
    image: 'https://unsplash.com/photos/CseaW93wzUQ',
    songs: songs.slice(14, 30),
  },
  {
    id: 3,
    name: 'They move on Tracks of Never-Ending Light',
    image: 'https://unsplash.com/photos/ukzHlkoz1IE',
    songs: songs.slice(30, 41),
  },
  {
    id: 4,
    name: 'You & me',
    image: 'https://unsplash.com/photos/AlgUPaNhl0M',
    songs: songs.slice(41, 48),
  },
  {
    id: 5,
    name: 'Chill tracks',
    image:
      'https://www.shutterstock.com/vi/image-photo/happy-igen-teen-hipster-pretty-fashion-1676794291',
    songs: songs.slice(48, 65),
  },
  {
    id: 6,
    name: 'Daily mix',
    image:
      'https://www.shutterstock.com/vi/image-photo/portrait-mixed-breed-dogs-wearing-harness-2142535571',
    songs: songs.slice(65, 75),
  },
  {
    id: 7,
    name: 'Điều buồn nhất',
    image:
      'https://www.shutterstock.com/vi/image-photo/beautiful-chinese-girl-waiting-someone-long-148387961',
    songs: songs.slice(75, 83),
  },
];
