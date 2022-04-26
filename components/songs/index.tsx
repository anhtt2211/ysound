import React, { useEffect, useState } from 'react';
import { Song } from './song';
import songsData from '@data/songs.json';
import { ISong } from '@domain/models/song';
import { useAppSelector } from '@redux/hooks';

const tracks = [
  {
    order: 1,
    name: 'Chuyến đi xa',
    artist: 'Puu',
    albumName: 'Album',
    duration: '5:02',
  },
  {
    order: 2,
    name: 'Đưa nhau đi trốn',
    artist: 'Đen, Linh Cáo',
    albumName: 'Album',
    duration: '4:02',
  },
  {
    order: 3,
    name: '5AM',
    artist: 'Cá Hồi Hoang',
    albumName: 'Album',
    duration: '4:23',
  },
  {
    order: 4,
    name: 'Tỉnh giấc khi ông trời đang ngủ',
    artist: 'TRANG',
    albumName: 'Album',
    duration: '4:08',
  },
  {
    order: 5,
    name: 'Sương mờ',
    artist: 'Tuấn',
    albumName: 'Album',
    duration: '3:02',
  },
  {
    order: 6,
    name: 'Một bình minh tuyệt vời',
    artist: 'Puu',
    albumName: 'Album',
    duration: '3:48',
  },
  {
    order: 7,
    name: 'Mơ',
    artist: 'Vũ Cát Tường',
    albumName: 'Album',
    duration: '4:23',
  },
];

export const Songs = () => {
  const [songs, setSongs] = useState<ISong[]>(songsData);
  const { current } = useAppSelector((state) => state.playLists);

  useEffect(() => {
    current && setSongs(current.songs);
  }, [current]);

  console.log({ songs });

  return (
    <div className="text-white flex flex-col">
      {songs.map((song, index) => (
        <Song
          id={song.id}
          key={song.id}
          order={index + 1}
          name={song.name}
          author={song.author}
          links={song.links}
          image={song.links.images[0].url}
          url={song.url}
        />
      ))}
    </div>
  );
};
