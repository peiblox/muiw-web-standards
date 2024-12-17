import { useLocalStorageState } from 'ahooks';

export default function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorageState<number[]>("wishlist", {
    defaultValue: [],
    listenStorageChange: true,
  });

  const add = (id: number) => {
    const updatedWishlist = [...(wishlist || []), id];
    setWishlist(updatedWishlist);
  };

  const remove = (id: number) => {
    const updatedWishlist = (wishlist || []).filter((item: number) => item !== id);
    setWishlist(updatedWishlist);
  };

  return { wishlist: wishlist || [], add, remove };
}
