export const Head = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Performance: DNS Prefetch & Preconnect */}
      <link rel="dns-prefetch" href="https://static.wixstatic.com" />
      <link rel="preconnect" href="https://static.wixstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://dostwin.app" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://static.parastorage.com" crossOrigin="anonymous" />
      
      {/* Accessibility: Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dostwin - Best Online Gaming Platform in India" />
      <meta property="og:description" content="Play 50+ real money games including lottery, casino, slots, and sports betting. ₹500 welcome bonus, instant withdrawals, and UPI payments. Join 10,000+ active players." />
      <meta property="og:image" content="https://static.wixstatic.com/media/dc7695_6e2dbf2a47af4afcb0b68f25be84363a~mv2.png?originWidth=1200&originHeight=630" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:site_name" content="Dostwin Gaming Platform" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dostwin - Best Online Gaming Platform in India" />
      <meta name="twitter:description" content="Play 50+ real money games. ₹500 bonus, instant withdrawals, UPI payments. Join now!" />
      <meta name="twitter:image" content="https://static.wixstatic.com/media/dc7695_6e2dbf2a47af4afcb0b68f25be84363a~mv2.png?originWidth=1200&originHeight=630" />
      <meta name="twitter:creator" content="@dostwin" />
      
      {/* General Meta Tags */}
      <meta name="description" content="Dostwin - India's best online gaming platform with 50+ real money games, ₹500 welcome bonus, instant withdrawals, and secure UPI payments. Play lottery, casino, slots, and sports betting." />
      <meta name="theme-color" content="#2979F2" />
      <meta name="color-scheme" content="dark" />
      
      {/* Accessibility & SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dostwin" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" as="image" href="https://static.wixstatic.com/media/dc7695_5d72d2fbca4e48949485b38fa5f48893~mv2.png" />
      <link rel="preload" as="font" href="/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkaHkaSTbQWt4N.woff2" type="font/woff2" crossOrigin="anonymous" />
    </>
  );
};
