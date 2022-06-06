import { Box, Skeleton } from "@mui/material";
import React from "react";

export const SkeletonProduct = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          gap: 5,
        }}
      >
        <Skeleton variant="rectangular" width={500} height={500} />

        <Box
          sx={{
            width: "70%",
          }}
        >
          <Skeleton variant="text" height={50} sx={{ mb: 4 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton
            variant="text"
            sx={{
              mb: 4,
            }}
          />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Box>
      </Box>
    </div>
  );
};
