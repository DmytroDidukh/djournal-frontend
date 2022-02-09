import { FC } from 'react';

// STYLES
import styles from './Loader.module.scss';

interface LoaderProps {
    duration: 'auto' | '1s' | string;
}

export const Loader: FC<LoaderProps> = ({ duration }) => {
    return (
        <div className={styles.root}>
            <span className={styles.loader} style={{ animationDuration: duration }} />
        </div>
    );
};
