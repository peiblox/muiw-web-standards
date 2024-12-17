"use client";

import useProduct from "@/hooks/use-product";
import ProductCard from "../ProductCard";

type WishlistProductProps = {
  id: number;
};

export default function WishlistProduct({
  id
}: WishlistProductProps) {
  const { product } = useProduct(id);

  return (
    (!product && <p>Loading product...</p>) ||
    (product && <ProductCard
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      description={product.description}
    />)
  );
}
