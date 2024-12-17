"use client";

import { useMediaQuery } from "@mui/material";

export default function useDeviceStyles() {
  const matches = useMediaQuery("(min-width:600px)");

  return {
    isMobile: !matches,
    isDesktop: matches,
  };
}
