"use client";

import WishlistProduct from "../WishlistProduct";
import useWishlist from "@/hooks/use-wishlist";
import useDeviceStyles from "@/hooks/use-device-styles";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Wishlist({}) {
  const { isMobile } = useDeviceStyles();

  const { wishlist } = useWishlist();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Stack direction="row" spacing={2} alignItems="center">
          <h1>Wishlist</h1>
          <Chip
            label={wishlist.length > 0 ?
              `${wishlist.length} products` :
              "No products in wishlist"
            }
          />
        </Stack>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="primary"
          >
          <Link href={"/"}>Back to products</Link>
        </Button>
      </Grid>
      {wishlist.length === 0 &&
        <Alert severity="info" sx={{ width: "100%" }}>Your wishlist is empty</Alert>
      }
      {wishlist.map((id) => (
        <Grid key={id} size={isMobile? 12: 4}>
          <WishlistProduct id={id} />
        </Grid>
      ))}
    </Grid>
  );
}
