import { Product } from "@prisma/client";

interface CartItems extends Product {
  quantity: number;
}

export interface CartSlice {
  items: CartItems[];
  isLoading: Boolean;
  error: Error | null;
}
