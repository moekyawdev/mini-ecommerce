import { Product } from "@prisma/client";

export interface ProductSlice {
  items: Product[];
  isLoading: Boolean;
  error: Error | null;
}
