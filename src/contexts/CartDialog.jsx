import { createContext, useContext, useState } from "react";

const CartDialog = createContext({
  openDialog: false,
  onOpenDialog: () => {},
  onCloseDialog: () => {},
});
CartDialog.displayName = "Dialog";

export const useDialog = () => useContext(CartDialog);

const DialogProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <CartDialog.Provider value={{ openDialog, onOpenDialog, onCloseDialog }}>
      {children}
    </CartDialog.Provider>
  );
};

export default DialogProvider;