'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function StoreWrapper() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');

  const storeBaseUrl = 'https://tikizikike.vercel.app';

  useEffect(() => {
    const iframe = document.getElementById('store-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = productId ? `${storeBaseUrl}/store/product/${productId}` : `${storeBaseUrl}/store`;
    }
  }, [productId]);

  return (
    <div className="w-full min-h-screen">
      <iframe
        id="store-iframe"
        src={storeBaseUrl + '/store'}
        className="w-full h-screen border-none"
        title="TIKIZIKI Store"
      />
    </div>
  );
}
