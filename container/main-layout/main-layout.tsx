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
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Content />
        {/* <div>{children}</div> */}
      </main>
      <div className="sticky bottom-0">
        <Audio />
      </div>
    </div>
  );
};

export default MainLayout;
