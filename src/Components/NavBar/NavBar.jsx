import React, { useState } from 'react';
import './NavBar.css';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('SocialFeed');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='nav'>
      <nav>
        <h3>Social Feed</h3>
      </nav>
      {}
      {activeTab === 'Home' && <div>Home Content</div>}
      {activeTab === 'About' && <div>About Content</div>}
      {activeTab === 'Contact' && <div>Contact Content</div>}
    </div>
  );
};

export default NavigationBar;
