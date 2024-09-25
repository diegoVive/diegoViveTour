'use client'

import Script from "next/script"




const GoogleTagManager = () => {



  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        strategy="afterInteractive" 
        onLoad={() => console.log('GTM script loaded')}
      />
      <Script
        id="gtm-config-script"
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'GTM-PHGHTBXB', {
              'anonymize_ip': true,
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleTagManager
