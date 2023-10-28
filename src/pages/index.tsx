/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import Products from "@/components/products";
import SearchProducts from "@/components/searchProducts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  //Dispatch from dataBase

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const cartItems = useAppSelector((state) => state.cart.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setFilteredProducts(products);
    }
  }, [products]);

  //Adding MUI Card

  return (
    <Box>
      <Link href={"/cart"}>
        <Box sx={{ position: "absolute", top: 10, right: 50 }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", position: "relative" }}
          >
            <LocalMallIcon
              sx={{
                fontSize: 50,
                color: "darkblue",
                cursor: "pointer",
              }}
            />
            {cartItems.length > 0 && (
              <Typography
                sx={{
                  color: "white",
                  position: "absolute",
                  right: 2,
                  top: 2,
                  bgcolor: "green",
                  height: 20,
                  width: 20,
                  textAlign: "center",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                {cartItems.length}
              </Typography>
            )}
          </Box>
        </Box>
      </Link>
      <SearchProducts
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <Products products={filteredProducts} />
    </Box>
  );
}
