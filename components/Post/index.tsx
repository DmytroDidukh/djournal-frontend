import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';

// COMPONENTS
import { PostActions } from '../PostActions';
// UTILS & SERVICES
import { PostDtoType } from 'api/types';
// STYLES
import styles from './Post.module.scss';

interface PostProps {
    post: PostDtoType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    console.log('POST: ', post);
    return (
        <Paper elevation={0} className='p-20' classes={{ root: styles.paper }}>
            <section>
                <Typography variant='subtitle2' color='textSecondary' className='mr-10'>
                    <Link href={`/profile/${post.author.id}`}>
                        <a>{post.author.fullName}</a>
                    </Link>
                </Typography>
                <Typography variant='h3' className={clsx(styles.title, 'mt-10 mb-10')}>
                    <Link href={`/post/${post.slug}`}>
                        <a>{post.title}</a>
                    </Link>
                </Typography>
            </section>
            <Typography className='mt-10 mb-15'>{post.description}</Typography>
            {/* <Image*/}
            {/*    src='https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/'*/}
            {/*    height={500}*/}
            {/*    width={600}*/}
            {/*/ >*/}
            <PostActions views={post.views} />
        </Paper>
    );
};
