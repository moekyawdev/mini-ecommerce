/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();
  const productId = Number(router.query.id);
  const products = useAppSelector((state) => state.products.items);
  const product = products.find((product) => product.id === productId);
  const dispatch = useAppDispatch();

  if (!product) return null;

  return (
    <Box>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={product?.imageUrl || ""} width={400} />
        </Box>

        <Box sx={{ ml: 3, maxWidth: 400 }}>
          <Typography variant="h4">{product?.title}</Typography>
          <Typography sx={{ my: 3, textAlign: "justify" }}>
            {product?.description}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {`$ ${product?.price} `}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                dispatch(addToCart(product));
                router.push("/");
              }}
              fullWidth
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
