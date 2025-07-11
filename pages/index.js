import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import BannerSection from './layouts/sections/slonigiraf/banner'
import AboutSection from './layouts/sections/slonigiraf/about'
import ServiceSection from './layouts/sections/slonigiraf/service'
import VideoSection from './layouts/sections/slonigiraf/video'
import WorkSection from './layouts/sections/slonigiraf/work'
import ExpertSection from './layouts/sections/slonigiraf/expert'
import TestimonialSection from './layouts/sections/slonigiraf/testimonial'
import BlogSection from './layouts/sections/slonigiraf/blog'
import FooterSection from './layouts/sections/slonigiraf/footer'
import CookieManagerClient from './layouts/sections/slonigiraf/cookieManagerClient'

const Home = () => {

  return (
    <div className="theme-color" >
        <Head>
            <title>Slonig | Peer Tutoring App for Classrooms</title>
            <meta name='Slonig | Peer Tutoring App for Classrooms' content='' />
        </Head>
        <CookieManagerClient />

        <Header className="agency" />

        <BannerSection />

        <VideoSection />

        <AboutSection />

        <ServiceSection />

        <TestimonialSection />

        <ExpertSection />

        <WorkSection />

        <BlogSection />

        <FooterSection />

    </div>
  )
}

export default Home
