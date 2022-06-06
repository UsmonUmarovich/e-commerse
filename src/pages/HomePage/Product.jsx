import { Box, Container, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/Product";

export const Product = () => {
  const { product, getProductById } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Product</Typography>
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
    </Container>
  );
};
