'use client';

import React from 'react';

// Fonts
import { Playfair_Display, Poppins } from 'next/font/google';

// Components from your store-dev folder
import CartButton from '../ui/cart-button';
import Logo from '../ui/logo';
import MenuButton from '../ui/menu-button';

// If you need the cart context, use a relative path
import { useCart } from '../../context/cart-context';

// Fonts setup
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', display: 'swap' });

const StoreHeader: React.FC = () => {
  const { cart } = useCart(); // assuming useCart hook returns cart

  return (
    <header className={`store-header ${playfair.variable} ${poppins.variable}`}>
      <div className="header-container">
        <Logo />
        <nav className="header-nav">
          <MenuButton />
        </nav>
        <CartButton cartItemCount={cart.length} />
      </div>
    </header>
  );
};

export default StoreHeader;
