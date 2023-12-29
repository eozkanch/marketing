import React, { useState } from 'react';
import './scroll-selected.scss';
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollSelected = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('tr');
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang);
    // Dil seçildiğinde yapılacak işlemleri buraya ekleyebilirsiniz.
    console.log('Seçilen Dil:', selectedLang);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="scroll-selected">
      <select className="custom-select" onChange={handleLanguageChange} value={selectedLanguage}>
    
        <option className='option' value="tr">🇹🇷 </option>
        <option  className='option' value="de">🇩🇪 </option>
        <option  className='option' value="fr">🇫🇷 </option>
      </select>
  

    </div>
  );
};

export default ScrollSelected;





