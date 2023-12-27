
import React, { useEffect, useState } from 'react';
import './scroll-whatsapp.scss';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from "react-icons/fa";

const ScrollWhatsapp = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 5) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollButton && (
        <Button variant="secondary" className="scrollWhatsapp" onClick={scrollToTop}>
        <FaWhatsapp  size={30}/>Whatsapp
     
        </Button>
      )}
    </>
  );
};

export default ScrollWhatsapp;
