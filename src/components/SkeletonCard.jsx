import { Box, Skeleton, Paper } from "@mui/material";
import React from "react";

export const SkeletonCard = () => {
  return (
    <Box
      variant="outlined"
      sx={{ width: 240, p: 1, display: "flex", flexDirection: "column" }}
    >
      <Skeleton variant="rectangular" height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton variant="rectangular" width={80} height={20} />
        <Skeleton variant="rectangular" width={80} height={20} />
      </Box>
    </Box>
  );
};
