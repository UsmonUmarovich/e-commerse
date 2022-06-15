import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useDialog } from "../contexts/CartDialog";

export const BuyDialog = () => {
  const { openDialog, onCloseDialog } = useDialog();
  return (
    <Dialog open={openDialog} onClose={onCloseDialog}>
      <DialogTitle>E-Commerce</DialogTitle>
      <DialogContent
        sx={{
          width: [300, 400, 450],
        }}
      >
        <TextField
          label={"Full Name"}
          sx={{
            width: "100%",
            mt: 5,
          }}
        />
        <TextField
          label={"Adress"}
          sx={{
            width: "100%",
            mt: 2,
          }}
        />
        <TextField
          type="number"
          label={"Card Date"}
          sx={{
            width: "100%",
            mt: 2,
          }}
        />
        <TextField
          type="number"
          label={"Card Number"}
          sx={{
            width: "100%",
            mt: 2,
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 5
          }}
        >
          <Button sx={{ width: "100%" }} variant="outlined" onClick={onCloseDialog}>
            Cancel
          </Button>
          <Button sx={{ width: "100%" }} variant="contained">
            Buy
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
