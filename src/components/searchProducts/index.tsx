import { Box, TextField } from "@mui/material";
import { Product } from "@prisma/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
}

const SearchProducts = ({ products, setFilteredProducts }: Props) => {
  const handleSearch = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchProduct = evt.target.value.toLowerCase();
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchProduct)
    );
    setFilteredProducts(searchResults);
  };

  return (
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
  );
};

export default SearchProducts;
