import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/home/ProductCard";
import { useAllProduct } from "../../contexts/AllProducts";

export const Search = () => {
  const { products } = useAllProduct();
  const { product } = useParams();

  const prods = products.filter((p) =>
    p.title.toLowerCase().includes(product.toLowerCase)
  );

  if (!prods.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Typography color="darkgray">No results found for {product}</Typography>
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {prods.map((p, i) => {
        return (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} />
          </Grid>
        );
      })}
    </Grid>
  );
};
