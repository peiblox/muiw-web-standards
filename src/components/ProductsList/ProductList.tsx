"use client";

import useProducts from "@/hooks/use-products";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid2";
import useWishlist from "@/hooks/use-wishlist";
import Link from "next/link";
import { Product } from "@/types/product";
import useDeviceStyles from "@/hooks/use-device-styles";

export default function ProductList({}) {
  const { isMobile } = useDeviceStyles();

  const { products, isLoading } = useProducts();
  const { wishlist } = useWishlist();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <h1>List of products</h1>
        <h2>{wishlist.length} products in wishlist</h2>
        <p><Link href={"/wishlist"}>See wishlist</Link></p>
      </Grid>
      {isLoading && <p>Loading...</p>}
      {products && products.map((product: Product) => {
        return (
          <Grid key={product.id} size={isMobile? 12: 4}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </Grid>
        );
        })
      }
    </Grid>
  );
}
