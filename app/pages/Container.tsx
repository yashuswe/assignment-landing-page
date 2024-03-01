import { VerticalDiv } from '../components/VerticalDiv';
import Gallery from './Gallery';
import styles from "../components/carousel.module.scss";

export const Containerc = () => {
    return (
        <div className={styles.container}>
            <VerticalDiv />
            <Gallery />
        </div>
    );
};

