/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

import {
    FloatingBalls, 
    NavBar,
  } from "../../components";
  import { Footer } from "../../components/footer/footer";
  
  export function Contact() {
    
    document.title = "Contact us | Neroo "
  
    return (
      <div className="container relative">
        <FloatingBalls />
        <NavBar /> 
         
        <Footer />
      </div>
    );
  }
  