/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import ProductCard from "@/components/productCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { Box, TextField } from "@mui/material";
import { Product } from "@prisma/client";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  //Dispatch from dataBase

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchProduct = evt.target.value.toLowerCase();
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchProduct)
    );
    setFilteredProducts(searchResults);
  };

  //Adding MUI Card

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <TextField
          sx={{ width: "500px" }}
          onChange={handleSearch}
          placeholder="Search products..."
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center ",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.map((product) => (
          <Box sx={{ mr: 2, mb: 2 }} key={product.id}>
            <ProductCard
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl || ""}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
