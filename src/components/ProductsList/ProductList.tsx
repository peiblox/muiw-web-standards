"use client";

import ProductCard from "../ProductCard";
import { Product } from "@/types/product";
import useProducts from "@/hooks/use-products";
import useWishlist from "@/hooks/use-wishlist";
import useDeviceStyles from "@/hooks/use-device-styles";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductList({}) {
  const { isMobile } = useDeviceStyles();

  const { products, isLoading } = useProducts();
  const { wishlist } = useWishlist();

  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <Grid size={12}>
        <Stack direction="row" spacing={2} alignItems="center">
          <h1>List of products</h1>
          <Chip
            label={wishlist.length > 0 ?
              `${wishlist.length} products in wishlist` :
              "No products in wishlist"
            }
          />
        </Stack>
        <Button
          startIcon={<FavoriteIcon />}
          variant="contained"
          color="primary"
          >
          <Link href={"/wishlist"}>See wishlist</Link>
        </Button>
      </Grid>
      {isLoading &&
        <Alert severity="info" sx={{ width: "100%" }}>Loading products...</Alert>
      }
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
