import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { PRODUCTS } from '../assets/products/products';

type CartContextProviderProps = {
  children: ReactNode;
};

// [{id: 1, qty: 2}, {id: 2, qty: 5}]
type CartItem = {
  id: number;
  qty: number;
};

type ContextValue = {
  cartItems: CartItem[];
  getItemQty: (id: number) => number | null;
  getTotalQty: () => number;
  getTotalAmount: () => string;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => number | undefined;
  favoriteIds: number[];
};

const CartContext = createContext({} as ContextValue);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = (props: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, qty: 2 },
    { id: 2, qty: 5 },
  ]);

  const [favoriteIds, setFavoriteIds] = useState<number[]>([1, 2, 5])
  // [1, 2, 5]

  const getItemQty = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    return item?.qty || null;
  };

  const getTotalQty = () => {
    const totalQty = cartItems.reduce((sum, item) => {
      return sum + item.qty;
    }, 0);
    return totalQty;
  };

  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((sum, item) => {
      const product = PRODUCTS.find((product) => product.id === item.id);
      if (product) {
        sum += product.price * item.qty;
      }
      return sum;
    }, 0);
    return totalAmount.toFixed(2);
  };

  const addToCart = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) {
      setCartItems([...cartItems, { id, qty: 1 }]);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let updatedCartItems;
      if (item.qty === 1) {
        updatedCartItems = cartItems.filter((item) => item.id !== id);
      } else {
        updatedCartItems = cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        });
      }
      setCartItems(updatedCartItems);
    }
  };

  const toggleFavorite = (id: number) => {
    const favoriteId = favoriteIds.find(fid => fid === id);
    if (!favoriteId) {
      setFavoriteIds([...favoriteIds, id])
    }
    else {
      const updatedIds = favoriteIds.filter(fid => fid !== id);
      setFavoriteIds(updatedIds);
    }
  }

  const isFavorite = (id: number) => {
    return favoriteIds.find(fid => fid === id);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    getItemQty,
    getTotalQty,
    getTotalAmount,
    addToCart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
    favoriteIds,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
