import Script from "next/script";

declare global {
  interface Window {
    wcs_add?: any;
    wcs?: any;
    wcs_do?: () => void;
  }
}

export default function NaverAnalytics() {
  return (
    <>
      <Script src="//wcs.naver.net/wcslog.js" strategy="afterInteractive" />
      <Script
        id="naver-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if(!window.wcs_add) window.wcs_add = {};
              window.wcs_add["wa"] = "139fd13a653c8b0";
              if(window.wcs) {
                window.wcs_do();
              }
            })();
          `,
        }}
      />
    </>
  );
}
