import Script from "next/script";

/** Pixel previously detected on the live site via Tag Manager. */
const FACEBOOK_PIXEL_ID = "1141776443357356";

/**
 * Renders in the initial HTML so crawlers can see the pixel without waiting
 * for the delayed Tag Manager load. The script itself is async.
 */
export function FacebookPixel() {
  return (
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){
          if(f.fbq)return;
          n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
          t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
        }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
