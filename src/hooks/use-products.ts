"use client";

import useSWR from "swr";

export default function useProducts() {
  const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json());

  const {
    data: products,
    error,
    isLoading
  } = useSWR("https://fakestoreapi.com/products", fetcher);

  return {
    products,
    error,
    isLoading
  };
}
