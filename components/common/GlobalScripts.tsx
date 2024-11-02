import Script from "next/script";

const GlobalScripts = () => {
  return (
    <Script
      src="/scripts/ejs.min.js"
      strategy="afterInteractive"
      type="module"
    ></Script>
  );
};

export default GlobalScripts;
