'use client';
import { useContext } from 'react';
// components
import CartItem from './CartItem';
import CartBottom from './CartBottom';
import CartTop from './CartTop';
// context
import { CartContext } from '../context/CartContext';

const CartDesktop = () => {
  const { isOpen, cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      {/* cart top */}
      <CartTop />
      {/* item list */}
      <div
        className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin ${
          cart.length >= 3 &&
          'scrollbar-track-black/10 scrollbar-thumb-secondary'
        }`}
      >
        {cart.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartDesktop;
