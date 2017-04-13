import React from 'react';
import android from '../../public/assets/img/android-badge.svg';
import ios from '../../public/assets/img/ios-appstore-logo.svg';
import '../style/app_store_links.css';

const AppStoreLinks = () => {
  return (
    <div className="app-store-container">
      <p>Download the app!</p>
      <div className="logos-container">
        <img src={android}></img>
        <img className="ios" src={ios}></img>
      </div>
      <div className="padding" />
    </div>
  )
}

export default AppStoreLinks;
