
import React, { useEffect, useState } from 'react';
import './scroll-button.scss';
import { Button } from 'react-bootstrap';
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollButton = () => {
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
        <Button variant="outline-primary" className="scrollButton" onClick={scrollToTop}>
        <FaAngleDoubleUp size={30}/>
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
