import React from 'react';
import clsx from 'clsx';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

// COMPONENTS
import { SideCommentItem } from './SideCommentItem';
// OTHER
import data from 'data';
// STYLES
import styles from './SideComments.module.scss';

export const SideComments = () => {
    const [visible, setVisible] = React.useState(true);

    const toggleVisible: () => void = () => {
        setVisible(!visible);
    };

    return (
        <div className={clsx(styles.root, !visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Comments <ArrowRightIcon />
            </h3>
            {visible &&
                data.comments.popular.map((obj) => <SideCommentItem key={obj.id} {...obj} />)}
        </div>
    );
};
