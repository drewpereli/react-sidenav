import { useContext } from 'react';
import { DrawerContext } from '../App';

export default function NavBar() {
  const { setDrawerOpen } = useContext(DrawerContext);

  return (
    <>
      <nav className="p-4 flex items-center bg-black text-white">
        <h1>My app</h1>
        <button onClick={() => setDrawerOpen((v) => !v)}>Drawer</button>
      </nav>
    </>
  );
}
