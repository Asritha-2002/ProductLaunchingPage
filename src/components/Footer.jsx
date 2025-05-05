import React from "react";
import image from "../assets/react.svg";
import "./Footer.css";

import us from '../assets/united-states.png'

 import gpay from '../assets/google-pay.png'
 import applePay from '../assets/apple-pay.png'
 import visa from '../assets/visa.png'
 import paypal from '../assets/paypal.png'
 import creditCard from '../assets/credit-card.png'
 import amazonPay from '../assets/amazon-pay.png'
 import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top-container">
        <div className="left-top-footer">
          <h4> BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse</p>
          <div className="subscribe">
            <input type="text" placeholder="Enter Your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
          <hr style={{ border:"1px solid white",marginTop:"17px" }} className="sub-divider" />
        </div>
        
        <div className="right-top-footer">
          <h4 className="for-laptop">CONTACT US</h4>
          <h4 className="for-mobile">CALL US</h4>
<div className="contact-tablet">
<p>+44 221 133 5360</p>
<p className="contact-email">customercare@mettamuse.com</p>
</div>
<hr style={{ border:"1px solid white",marginTop:"17px" }} className="contact-divider" />      
          <h4>CURRENCY</h4>
          <div>
            <img src={us} alt="" style={{width:"20px", height:"20px"}}/>
            <h5 style={{ display: "inline" }}>+USD</h5>
          </div>
          <p className="info-tablet">
            Transactions will be completed in Euros and a currency reference is
            available on hover
          </p>
          <hr style={{ border:"1px solid white" ,marginTop:"17px"}} className="after-mobile-divider"/>
        </div>
        
      </div>
      <hr style={{ border:"0.5px solid white"}} className="after-currency"/>
      <div className="bottom-container">
        <div className="bottom-left-footer">
          <h3>metta muse</h3>
          <p>About</p>
          <p>Stories</p>
          <p>Artisas</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
          <hr style={{ border:"1px solid white",marginTop:"17px" }} className="muse-divider" />
        </div>
       
        <div className="bottom-mid-footer">
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payments & Pricing</p>
          <p>Returns & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <hr style={{ border:"1px solid white",marginTop:"17px" }} className="links-divider"/>
        </div>
        <div className="bottom-right-footer">
          <div className="bottom-right-top-footer">
          <h4>FOLLOW US</h4>
          <img src={instagram} alt="" style={{ width: "30px", height: "30px" }} />
          <img src={linkedin} alt="" style={{ width: "30px", height: "30px" }} />
          <hr style={{ border:"1px solid white",marginTop:"17px" }} className="follow-divider"/>
          </div>
         
<div className="bottom-right-bottom-footer">
  <h4>metta muse ACCEPTS</h4>
  <img src={gpay} alt="" style={{ padding:"0px 10px",background:"white",borderRadius:"2px"}} />
  <img src={applePay} alt="" style={{ padding:"0px 10px",background:"white",borderRadius:"2px"}} />
  <img src={visa} alt="" style={{ padding:"0px 10px",background:"white",borderRadius:"2px"}} />
  <img src={paypal} alt="" style={{ padding:"0px 10px",background:"white",borderRadius:"2px"}} />
  <img src={creditCard} alt="" style={{ padding:"0px 10px",background:"white",borderRadius:"2px"}} />
   <img src={amazonPay} alt="" style={{ padding:"0px 10px",background:"white" ,borderRadius:"2px"}} />
</div>
        </div>
      
      </div>
      <p className="copyright">Copyrigt@2025 mettamuse. All rights reserved</p>
    </div>
  );
};

export default Footer;
