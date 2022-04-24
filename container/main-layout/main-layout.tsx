import { Audio } from '@components/audio-player';
import { Content } from '@components/content';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';
import React from 'react';

type LayoutType = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div
      className="!bg-black h-screen overflow-hidden"
      style={{ backgroundColor: 'black' }}
    >
      <main className="flex">
        <Sidebar />
        <Content />
      </main>
      <div
        style={{ position: 'sticky', bottom: '0' }}
        // className="!sticky !bottom-0"
      >
        <Audio />
      </div>
    </div>
  );
};

export default MainLayout;
