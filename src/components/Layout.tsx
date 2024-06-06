import { ReactNode, useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { DrawerContext } from '../App';

export default function Layout({ children }: { children: ReactNode }) {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="grow overflow-hidden flex">
        {drawerOpen && (
          <nav className="h-full p-4 bg-gray-100">
            <div>asdflkj asdflkj</div>
            <div>asdflkj asdflkj</div>
            <div>asdflkj asdflkj</div>
            <div>asdflkj asdflkj</div>
            <div>asdflkj asdflkj</div>
          </nav>
        )}
        <main className="h-full grow p-8 overflow-y-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
