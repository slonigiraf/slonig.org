import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import BannerSection from './layouts/sections/slonigiraf/banner'
import AboutSection from './layouts/sections/slonigiraf/about'
import ServiceSection from './layouts/sections/slonigiraf/service'
import WorkSection from './layouts/sections/slonigiraf/work'
import ExpertSection from './layouts/sections/slonigiraf/expert'
import TestimonialSection from './layouts/sections/slonigiraf/testimonial'
import BlogSection from './layouts/sections/slonigiraf/blog'
import FooterSection from './layouts/sections/slonigiraf/footer'
import Steps from './layouts/sections/slonigiraf/steps'
import Collaborators from './layouts/sections/slonigiraf/collaborators'
import Script from "next/script";

const Home = () => {

  return (
    <div className="theme-color" >
      <Head>
        <title>Slonig | Peer Tutoring App for Classrooms</title>
        <meta name='Slonig | Peer Tutoring App for Classrooms' content='' />
      </Head>

      {/* Matomo Tracking */}
      <Script id="matomo" strategy="afterInteractive">
        {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.slonig.org/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '2']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
        `}
      </Script>

      <Header className="agency" />

      <BannerSection />

      <AboutSection />

      <ServiceSection />

      <TestimonialSection />

      <Steps />

      <Collaborators />

      <ExpertSection />

      <WorkSection />

      <BlogSection />

      <FooterSection />

    </div>
  )
}

export default Home
