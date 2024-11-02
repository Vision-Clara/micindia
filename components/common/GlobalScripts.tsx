import Script from "next/script";

const GlobalScripts = () => {
  return (
    <Script src="/scripts/ejs.min.js" strategy="afterInteractive"></Script>
  );
};

export default GlobalScripts;
