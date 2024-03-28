import { CartItem, Product } from '@/types';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { randomUUID } from 'expo-crypto';

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem['size']) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};
// on konsumsi value
const CartContext = createContext<CartType>({
  items: [],
//   empyty function
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem['size']) => {

    // if already in cart, increment quantity
    const existingItem = items.find(
      (item) => item.product === product && item.size === size
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    // nambahkan data saat dklik
    const newCartItem: CartItem = {
      id: randomUUID(), // generate
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  // updateQuantity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items
    //   d ulangi setiap 1 single item lalu cek jika tidak salah satu
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        // biar g smpe minus
        .filter((item) => item.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );
// console.log(items)
  return (
    // dari createcontext
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);