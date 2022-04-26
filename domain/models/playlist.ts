import { ISong } from './song';

export interface IPlayList {
  id: number;
  name: string;
  image?: string;
  songs: ISong[];
}
