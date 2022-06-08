import { createContext, useContext, useState } from "react";

const DrawerContext = createContext({
  open: false,
  openDrawer: () => {},
  closeDrawer: () => {},
  toggleDrawer: () => {},
});
DrawerContext.displayName = "DrawerContext";

export const useDrawer = () => useContext(DrawerContext);

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen((prew) => !prew);
  };

  return (
    <DrawerContext.Provider
      value={{
        open,
        openDrawer,
        closeDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
