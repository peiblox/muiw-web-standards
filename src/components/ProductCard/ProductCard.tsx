"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import useWishlist from "@/hooks/use-wishlist";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

type ShareDataProps = {
  title: string;
  text?: string;
  url?: string;
  files?: File[];
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
}: ProductCardProps) {
  const { wishlist, add, remove } = useWishlist();

  const handleWishlist = () => {
    if (wishlist.includes(id)) {
      remove(id);
    } else {
      add(id);
    }
  }

  const handleShare = async (withImage = false) => {
    let shareData: ShareDataProps = {
      title,
      text: title,
      url: `https://fakestoreapi.com/products/${id}`,
    };
    if (withImage) {
      const response = await fetch(image);
      const blob = await response.blob();

      const file = new File([blob], 'image.jpg', { type: blob.type });

      shareData = {
        title,
        text: title,
        files: [file],
      };
    }

    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  }

  return (
    <Card sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      <CardHeader title={`${id} ${title}`} subheader={price && `${price} €`} sx={{
        minHeight: "120px",
        alignItems: "flex-start",
      }}/>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "contain", padding: "1em" }}
      />
      <CardContent sx={{
        flexGrow: 1,
      }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleWishlist}>
          <FavoriteIcon color={wishlist.includes(id) ? 'error': 'action'} />
        </IconButton>
        <IconButton aria-label="share" onClick={() => handleShare()}>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => handleShare(true)}>
          <ImageOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
