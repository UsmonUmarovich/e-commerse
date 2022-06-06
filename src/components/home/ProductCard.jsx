import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card sx={{ height: "100%", position: "relative" }} component={Link} to={`/product/${product.id}`}>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          p: "2px 4px",
          background: (theme) => theme.palette.primary.main,
          color: "white",
          fontSize: 13,
        }}
      >
        {product.category}
      </Box>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 200, objectFit: "contain", p: 2 }}
      />

      <CardContent>
        <Typography variant="h6">
          {product.title.substring(0, 28)}...
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Rating name="read-only" value={product.rating.rate} readOnly /> -
          <Typography>{product.rating.count}</Typography>
        </Box>

        <Typography
          sx={{ display: "flex", alignItems: "flex-start" }}
          variant="body1"
          component="div"
          color="text.secondary"
        >
          <AttachMoney sx={{ fontSize: 16 }} />
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
