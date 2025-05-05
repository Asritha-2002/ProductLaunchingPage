import React, { useState, useEffect } from 'react';
import './Header.css';
import search from '../assets/search.png';
import heart from '../assets/heart.png';
import bag from '../assets/bag.png';
import user from '../assets/user.png';
import topMenu from '../assets/topMenu.png';
import logo from '../assets/diabetes.png';
import Footer from './Footer.jsx'
import RecommendedItems from './RecommendedItems'
import menu from '../assets/menu.png'
import {Link} from 'react-router-dom'
const Header = () => {
  const [textType, setTypeText] = useState('Eng ^');
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 420);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset textType on mobile
  useEffect(() => {
    setTypeText(isMobile ? '' : 'Eng ^');
  }, [isMobile]);

  const handleTextType = () => {
    if (!isMobile) {
      setTypeText(prev => (prev === 'Eng ^' ? 'Eng >' : 'Eng ^'));
    }
  };

  return (
    <div className='container'>

      {isMobile && (
        <div className="mobile-top">
         
          <div className="mobile-menu-icons">
            <img src={topMenu} alt="menu" />
            <img src={topMenu} alt="menu" />
            <img src={topMenu} alt="menu" />
          </div>
         
        </div>
      )}

      <div className="top-subheader">
        <p><img src={topMenu} alt="" />Lorem ipsum dolor</p>
        <p><img src={topMenu} alt="" />Lorem ipsum dolor</p>
        <p><img src={topMenu} alt="" />Lorem ipsum dolor</p>
        
      </div>
      <div className="top-subheader-for-mobile">
      <p><img src={topMenu} alt="" style={{width:"20px"}}/>Lorem ipsum dolor</p>
      </div>

      <div className="header">
        <img src={menu} alt="" style={{width:"30px", height:"30px"}} className='header-menu-icon'/>
        <img src={logo} alt="logo" className="logo" style={{width:"30px", height:"30px"}} />
        <h3 className='move-right'>LOGO</h3>
        <section className='tools'>
          <img src={search} alt="search" />
          <img src={heart} alt="heart" />
          <img src={bag} alt="bag" />
        
          {!isMobile && (
            <>
              <img src={user} alt="user" className="profile-icon" />
              <p onClick={handleTextType}>{textType}</p>
            </>
          )}
        </section>
       
      </div>
<hr className='bottom-divider'/>
      <div className="bottom-subheading">
        <h5>SHOP</h5>
        <h5>SKILLS</h5>
        <h5>STORIES</h5>
        <h5>ABOUT</h5>
        <h5>CONTACT</h5>
      </div>
      <div className="bottom-sub-mobile">
        <p style={{color:"silver"}}>HOME</p>
        <hr />
        <h5>SHOP</h5>
      </div>
      <hr />

      <div className="about">
        <p>DISCOVER OUR PRODUCTS</p>
        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod, eum optio impedit at unde nobis maiores blanditiis deleniti reprehenderit!</p>
      </div>
      <hr />
   <RecommendedItems/>
   <Footer/>

    </div>
  );
  


};

export default Header;
