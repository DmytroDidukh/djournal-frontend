import React from 'react';
import Link from 'next/link';

// STYLES
import styles from './SideComments.module.scss';

interface CommentItemProps {
    user: {
        id: number;
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

export const SideCommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <Link href={`/profile/${user.id}`}>
                <a>
                    <div className={styles.userInfo}>
                        <img
                            /* eslint-disable-next-line max-len */
                            src='https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/'
                            alt='User Avatar'
                        />
                        <b>{user.fullname}</b>
                    </div>
                </a>
            </Link>
            <p className={styles.text}>{text}</p>
            <a href='#'>
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    );
};
