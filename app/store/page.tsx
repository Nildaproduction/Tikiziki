'use client'

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function StorePage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');

  useEffect(() => {
    if (productId) {
      const iframe = document.getElementById('store-iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.src = `https://tikiziki.vercel.app/store?product=${productId}`;
      }
    }
  }, [productId]);

  return (
    <div className="w-full min-h-screen">
      <iframe
        id="store-iframe"
        src="https://tikiziki.vercel.app/store"
        className="w-full h-screen border-none"
        title="TIKIZIKI Store"
      />
    </div>
  );
}
