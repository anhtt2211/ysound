import { Footer } from '@components/footer';
import { Header } from '@components/header';
import React from 'react';

type LayoutType = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
