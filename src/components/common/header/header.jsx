// Header.jsx

import React, { useState, useEffect } from 'react';
import TopMenu from './top-menu/top-menu';
import MiddleMenu from './middle-menu/middle-menu';
import BottomMenu from './bottom-menu/bottom-menu';
import "./header.scss";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
      <TopMenu />
      <MiddleMenu className="middle-menu"/>
      <BottomMenu />
    </div>
  );
}

export default Header;



