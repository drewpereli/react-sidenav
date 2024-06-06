import { createContext, useState } from 'react';
import Layout from './components/Layout';

export const DrawerContext = createContext<{
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>(
  null as unknown as {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <Layout>
        {Array.from({ length: 100 }, () => {
          return <p>lorem</p>;
        })}
      </Layout>
    </DrawerContext.Provider>
  );
}

export default App;
