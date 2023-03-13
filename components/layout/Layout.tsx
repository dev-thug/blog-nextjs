import { FC, ReactNode } from 'react';

import MainNavigation from './MainNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
