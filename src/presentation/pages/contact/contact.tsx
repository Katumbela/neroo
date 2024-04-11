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
         <div className="flex items-center justify-center py-16 border-b-2 border-primary ">
            <h1 className="text-4xl font-bold text-white lg:text-5xl ">Get in Touch</h1>
         </div>
        <Footer />
      </div>
    );
  }
  