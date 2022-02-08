import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import { OutputBlockData } from '@editorjs/editorjs';
import clsx from 'clsx';

// UTILS & SERVICES
import { UserDtoType } from 'api/types';
import { PostActions } from 'components/PostActions';
// STYLES
import styles from './FullPost.module.scss';

interface FullPostProps {
    title: string;
    description: string;
    views: number;
    author: UserDtoType;
    body: OutputBlockData[];
}

export const FullPost: React.FC<FullPostProps> = ({ title, description, body, author, views }) => {
    return (
        <Paper elevation={0} className={styles.paper}>
            <div className={clsx('container', styles.container)}>
                <Typography variant='h4' className={styles.title}>
                    {title}
                </Typography>
                <div>
                    <Typography
                        variant='h6'
                        color='textSecondary'
                        className='mb-15'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {body?.slice(1).map((data) => {
                        return (
                            <Typography
                                variant='body1'
                                key={data.id}
                                dangerouslySetInnerHTML={{ __html: data.data.text }}
                            />
                        );
                    })}
                    <div className={styles.actions}>
                        <PostActions views={views} />
                    </div>
                    <div className='d-flex justify-between align-center mt-30 mb-30'>
                        <div className={styles.userInfo}>
                            <img
                                /* eslint-disable-next-line max-len */
                                src='https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/'
                                alt='Avatar'
                            />
                            <b>{author.fullName}</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant='contained' className='mr-15'>
                                <MessageIcon />
                            </Button>
                            <Button variant='contained'>
                                <UserAddIcon />
                                <b className='ml-10'>Follow</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
};
