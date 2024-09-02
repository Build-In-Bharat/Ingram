import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default HomeLayout;
