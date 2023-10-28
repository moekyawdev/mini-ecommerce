import InsideCart from "@/components/insideCart";
import { useAppSelector } from "@/store/hooks";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.price));
    return totalPrice;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {cartItems.length ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 30,
              right: 170,
            }}
          >
            <Typography variant="h6">Total price: {getTotalPrice()}</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Confirm Order
            </Button>
          </Box>
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: "flex", m: 2 }}>
              <InsideCart
                title={item.title}
                price={item.price}
                description={item.description}
                imageUrl={item.imageUrl || ""}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="h3">Empty Cart</Typography>
      )}
    </Box>
  );
};

export default Cart;
