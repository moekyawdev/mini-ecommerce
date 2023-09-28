/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import ProductCard from "@/components/productCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center ",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Box sx={{ mr: 2, mb: 2 }} key={product.id}>
          <ProductCard
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl || ""}
          />
        </Box>
      ))}
    </Box>
  );
}
