import { createContext } from "react";

export const ProductContext = createContext(null);

export default function ProductContextProvider({ value, children }) {
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
