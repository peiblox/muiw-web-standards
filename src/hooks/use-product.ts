"use client";

import useSWR from "swr";

export default function useProduct(id: number) {
  const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json());

  const {
    data: product,
    error,
    isLoading
  } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);

  return {
    product,
    error,
    isLoading
  };
}
