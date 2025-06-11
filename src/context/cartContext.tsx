'use client';

import { createContext, useState, type ReactNode } from 'react';
import { type CartItem } from '@/models/cart';
import { type Product } from '@/models/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

// Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider del carrito
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Agregar producto al carrito
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Si ya existe, aumentar cantidad
      setCart(cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si es nuevo, agregarlo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remover producto del carrito
  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      // Si cantidad es 0, remover el item
      removeFromCart(id);
    } else {
      // Actualizar cantidad
      setCart(cart.map(item =>
        item.id === id 
          ? { ...item, quantity: quantity }
          : item
      ));
    }
  };

  // Valor que se pasa a los componentes hijos
  const value = {
    cart, // Elementos del carrito
    addToCart, // Funcion para agregar
    removeFromCart, // Funcion para eliminar
    updateQuantity // Funcion para editar
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}