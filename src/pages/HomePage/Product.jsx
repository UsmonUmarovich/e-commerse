import { Box, Container, Rating, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SkeletonProduct } from "../../components/SkeletonProduct";
import { useProduct } from "../../contexts/Product";

export const Product = () => {
  const { product, getProductById } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 10,
      }}
    >
      {product.isLoading && <SkeletonProduct />}

      {product.product && (
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            gap: 5,
          }}
        >
          <Box
            sx={{
              width: 400,
            }}
            component="img"
            src={product.product.image}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h5">{product.product.title}</Typography>
            <Typography variant="body1">
              {product.product.description}
            </Typography>
            <Typography variant="h4" color="green">
              ${product.product.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Rating
                name="read-only"
                value={product.product.rating?.rate}
                readOnly
              />{" "}
              - <Typography>{product.product.rating?.count}</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};
