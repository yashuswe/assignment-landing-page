import AnimatedLogo from './AnimatedLogo';
import styles from './carousel.module.scss';


export const Logo: React.FC = () => {
    return(
        <div className={styles.conatinerLogo}>
<AnimatedLogo/>
        </div>
    )
}