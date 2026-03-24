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
      iframe.src = productId
        ? `${storeBaseUrl}/store/product/${productId}`
        : `${storeBaseUrl}/store`;
    }
  }, [productId]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <iframe
        id="store-iframe"
        src={storeBaseUrl + '/store'}
        className="flex-1 w-full h-full border-none"
        title="TIKIZIKI Store"
      />
    </div>
  );
}
