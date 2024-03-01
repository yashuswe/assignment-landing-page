
import Image from "next/image";
import { VerticalDiv } from "../components/VerticalDiv";
import styles from "../components/carousel.module.scss"
import ImageCard from "../components/ImageCard";


export const Screen4: React.FC = () => {
    return(
        <div className={styles.container}>
            <VerticalDiv />
            <div className={styles.screen4}>
                <div className={styles.sideImage}>
                    <img src="/assets/4.jpg"></img>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                <div className={styles.sideText}>
                    <h1 className={styles.line1}>
                        Lorem, ipsum dolor
                    </h1>
                    <div className={styles.purple1}>
                        <hr />
                    </div>
                    <p className={styles.purple2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minima ad totam consequuntur nostrum! Aspernatur quo pariatur officia? Inventore, magni ad!                    
                    </p>
                    <div className={styles.buttonText}>Lorem ipsum <span> <button><img src="/assets/10.svg"></img></button></span></div>
                </div>

                </div>
                
        </div>
        </div>
        
    )
}