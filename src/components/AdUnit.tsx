import React, { useEffect } from 'react';

interface AdUnitProps {
  slotId?: string;
  className?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

export function AdUnit({ slotId = "DEFAULT_SLOT_ID", className = '', format = 'auto', responsive = true }: AdUnitProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} data-ad-status="unfilled" aria-label="Advertisement">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-PUB-YOUR_CLIENT_ID" crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive={responsive ? "true" : "false"} />
    </div>
  );
}
