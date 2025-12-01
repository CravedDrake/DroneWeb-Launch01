import { Suspense } from "react";
import ProductsPage from "./products-content";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
