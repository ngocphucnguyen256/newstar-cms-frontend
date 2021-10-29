import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BodySection from '../partials/BodySection';
import AdsSlider from '../partials/AdsSlider';



function Home() {
  return (
     <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">


      {/*  Site header */}
      <div className="mb-2 ">

         <AdsSlider location="menu"/>
      </div>

      <Header />


      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        {/* <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div> */}

        {/*  Page sections */}
        {/* <HeroHome /> */}
        <BodySection />
        {/* <FeaturesBlocks /> */}
        {/* <Teams/> */}
        {/* <Process />
        <FeaturesHome />
        <Tabs />
        <Target />
        <News />
        <Newsletter /> */}
        {/* <HeroFeatures /> */}
        {/* <Stats /> */}
        {/* <CaseStudies /> */}
        {/* <Cta /> */}
        <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;