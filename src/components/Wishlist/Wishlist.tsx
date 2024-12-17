"use client";

import Grid from "@mui/material/Grid2";
import useWishlist from "@/hooks/use-wishlist";
import Link from "next/link";
import WishlistProduct from "../WishlistProduct";
import useDeviceStyles from "@/hooks/use-device-styles";

export default function Wishlist({}) {
  const { isMobile } = useDeviceStyles();

  const { wishlist } = useWishlist();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <h1>Wishlist ({wishlist.length} products)</h1>
        <p><Link href={"/"}>See all products</Link></p>
      </Grid>
      {wishlist.length === 0 && (
        <Grid size={12}>
          <p>Your wishlist is empty.</p>
        </Grid>
      )}
      {wishlist.map((id) => (
        <Grid key={id} size={isMobile? 12: 4}>
          <WishlistProduct id={id} />
        </Grid>
      ))}
    </Grid>
  );
}
