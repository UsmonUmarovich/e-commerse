import React from "react";
import { useCotegories } from "../../contexts/Categories";
import { Box, Button, Skeleton } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const HomeTop = () => {
  const { categories, isError, isLoading } = useCotegories();

  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams()

  const navigateTo = (category) => {
    navigate(category === "all" ? "/" : category);
  };

  return (
    <div>
      <Box sx={{ display: "flex", gap: 2 }}>
        {isLoading && (
          <>
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
          </>
        )}
        {categories.map((category, index) => {
          return (
            <Button
              onClick={() => navigateTo(category)}
              key={index}
              variant={
                params.id === category
                  ? "contained"
                  : category === "all" && location.pathname === "/"
                  ? "contained"
                  : "outlined"
              }
            >
              {category}
            </Button>
          );
        })}
      </Box>
    </div>
  );
};
