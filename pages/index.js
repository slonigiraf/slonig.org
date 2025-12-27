import Head from 'next/head'
import Header from './layouts/sections/slonigiraf/header'
import Banner from './layouts/sections/slonigiraf/banner'
import About from './layouts/sections/slonigiraf/about'
import Service from './layouts/sections/slonigiraf/service'
import Work from './layouts/sections/slonigiraf/work'
import Expert from './layouts/sections/slonigiraf/expert'
import Testimonial from './layouts/sections/slonigiraf/testimonial'
import Footer from './layouts/sections/slonigiraf/footer'
import Collaborators from './layouts/sections/slonigiraf/collaborators'
import Script from "next/script"
import LidCollector from './layouts/sections/slonigiraf/lid_collector'
import LidCollectorPopup from './layouts/sections/slonigiraf/lid_collector_popup'

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

      <Banner />

      <LidCollector id={'call_me_back'} caption={'Call Me Back'} />

      <About />

      <Service />

      <LidCollector id={'book_a_demo'} caption={'Send Me the Research'} />

      <Testimonial />

      <LidCollector id={'book_a_demo'} caption={'Book a Demo'} />

      <Collaborators />

      <Expert />

      <Work />

      <LidCollector id={'ask_a_question'} caption={'Ask a Question'} />

      <Footer />

      <LidCollectorPopup id={'call_me_back_popup'} caption={'Call Me Back'} />
    </div>
  )
}

export default Home
