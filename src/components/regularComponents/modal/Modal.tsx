import React from "react";
import { Modal, Box, Typography, ThemeProvider } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  content: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  handleClose,
  title,
  content,
}) => {
  const modalStyle: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    minWidth: "50%",
    minHeight: "50%",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {title && (
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        )}
        {content}
      </Box>
    </Modal>
  );
};

export default Modal;
