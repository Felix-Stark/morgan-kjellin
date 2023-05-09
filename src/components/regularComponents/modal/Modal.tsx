import React from "react";
import { Modal, Box, Typography, ThemeProvider } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface CustomModalProps {
  open: boolean;
  handleModalClose: () => void;
  title?: string;
  content: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  handleModalClose,
  title,
  content,
}) => {
  const modalStyle: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#e0f7fa",
    boxShadow: 24,
    p: 4,
    minWidth: "50%",
    minHeight: "50%",
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box sx={modalStyle}>
        {title && (
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        )}
        <Box>{content}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
