import ImageCard from '../components/ImageCard';
import styles from "../components/carousel.module.scss";

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <ImageCard
                src="/assets/1.png"
                text1="1"
                text2="Lorem ipsum dolor sit amet"
                text3="Third line of text"
            />
             <ImageCard
                src="/assets/2.png"
                text1="2"
                text2="Lorem ipsum dolor sit amet"
                text3="Third line of text"
            />
             <ImageCard
                src="/assets/3.png"
                text1="3"
                text2="Lorem ipsum dolor sit amet"
                text3="Third line of text"
            />
        </div>
    );
};

export default Gallery;