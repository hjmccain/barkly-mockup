import React from 'react';
import AppStoreLinks from './app_store_links';
import Footer from './footer';
import MoreInfo from './more_info';
import SignupHeader from './signup_header';
import '../style/landing.css';

const Landing = () => {
  return (
    <div>
      <SignupHeader />
      <MoreInfo />
      <AppStoreLinks />
      <Footer />
    </div>
  )
}

export default Landing;
