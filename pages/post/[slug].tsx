import React from 'react';
import { NextPage } from 'next';

// COMPONENTS
import { MainLayout } from 'layouts/MainLayout';
import { FullPost } from 'components/FullPost';
import { PostComments } from 'components/PostComments';
// UTILS & SERVICES
import { Api } from 'api';
import { PostDtoType } from 'api/types';

interface PostDetailsPageProps {
    post: PostDtoType;
}

const PostDetails: NextPage<PostDetailsPageProps> = ({ post }) => {
    return (
        <MainLayout className='mb-50' contentFullWidth>
            <FullPost
                title={post.title}
                description={post.description}
                body={post.body}
                author={post.author}
                views={post.views}
            />
            <PostComments />
        </MainLayout>
    );
};

export const getServerSideProps = async (ctx) => {
    try {
        const slug = ctx.params.slug;
        const post = await Api().post.getOneBySlug(slug);

        return {
            props: {
                post,
            },
        };
    } catch (err) {
        console.log(err);
    }

    return {
        props: {},
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
};

export default PostDetails;
