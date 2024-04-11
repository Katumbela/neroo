
import { motion } from "framer-motion";
import logo from "../../../assets/imgs/logo design 1.jpg";
import gif from "../../../assets/gif/spinner-2.gif";

export function Preloader() {
  return (
    <div className="preloader-container">
        
      <motion.img className="h-[10em] rounded-full" src={gif}/>
     
      <motion.img className="animate-bounce" src={logo}/>
    </div>
  );
}
