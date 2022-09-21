import { CaretCircleUp } from 'phosphor-react';
import React, { useState } from "react";
import { Button } from '../../../styles/Totop.module';

const ToTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth',
      });
    };
    
    // window.addEventListener('scroll', toggleVisible);
    global.window && window.addEventListener('scroll', toggleVisible)

  return (
    
    <Button className="totop animate-bounce">
        <CaretCircleUp className='rounded-full bg-white' size={32} color="#DAB752" onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}/>
    </Button>
  );
};

export default ToTop;
