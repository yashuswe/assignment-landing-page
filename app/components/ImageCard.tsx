import Image from 'next/image';
import styles from './carousel.module.scss';
import { ImageCardProps } from './types';



const ImageCard: React.FC<ImageCardProps> = ({ src, text1, text2, text3 }) => {
    return (
        <div className={styles.card}>
            <Image
                src={src}
                alt="Image description"
                layout="fill"
                objectFit="cover"
                className={styles.image}
            />
            <div className={styles.textContainerImage}>
                <p className={styles.gallery1}>{text1}</p>
                <p className={styles.gallery2}>{text2}</p>
                <p className={styles.gallery3}>{text3}</p>
            </div>
        </div>
    );
};

export default ImageCard;

