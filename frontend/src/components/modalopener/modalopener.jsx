import { Modal, Button } from "@material-ui/core";
import { useState } from "react";

export const ModalOpener = ({ children }) => {
  const [open, setOpened] = useState(false);
  const handleClose = () => {
    setOpened(false);
  };
  const handleOpen = () => {
      setOpened(true)
  }
  console.log("Open", open)
  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        {children}
      </Modal>
    </>
  );
};
