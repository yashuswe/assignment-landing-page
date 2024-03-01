import React from "react";
import Carousel from "../components/Carousel";
import { Header } from "../components/Header";

export const Hero: React.FC = () => {
    const images = ['/assets/1.png', '/assets/2.png', '/assets/3.png'];
    return (
       <div>
        <Header/>
         <Carousel images={images} />
        
       </div>
    )


}