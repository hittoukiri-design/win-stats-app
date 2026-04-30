export const Head = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="DMWIN Gaming Platform" />
      <meta property="og:description" content="Play 1000+ games, earn rewards & instant withdrawals. India's premier online gaming destination with UPI payments." />
      <meta property="og:image" content="https://static.wixstatic.com/media/dc7695_6e2dbf2a47af4afcb0b68f25be84363a~mv2.png?originWidth=1152&originHeight=576" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:site_name" content="DMWIN Gaming Platform" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DMWIN Gaming Platform" />
      <meta name="twitter:description" content="Play 1000+ games, earn rewards & instant withdrawals. India's premier online gaming destination with UPI payments." />
      <meta name="twitter:image" content="https://static.wixstatic.com/media/dc7695_6e2dbf2a47af4afcb0b68f25be84363a~mv2.png?originWidth=1152&originHeight=576" />
      
      {/* General Meta Tags */}
      <meta name="description" content="Play 1000+ games, earn rewards & instant withdrawals. India's premier online gaming destination with UPI payments." />
      <meta name="theme-color" content="#2979F2" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://static.parastorage.com" />
    </>
  );
};
