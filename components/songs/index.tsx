import React from 'react';
import { Song } from './song';

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
  return (
    <div className="text-white flex flex-col">
      {tracks.map((track) => (
        <Song
          key={track.order}
          order={track.order}
          name={track.name}
          artist={track.artist}
          albumName={track.albumName}
          duration={track.duration}
        />
      ))}
    </div>
  );
};
