import React from 'react';
import { NextPage } from 'next';

// COMPONENTS
import { MainLayout } from 'layouts/MainLayout';
import { FullPost } from 'components/FullPost';
import { PostComments } from 'components/PostComments';
// UTILS & SERVICES
import { Api } from 'api';
import { CommentDtoType, PostDtoType } from 'api/types';

interface PostDetailsPageProps {
    post: PostDtoType;
    comments: CommentDtoType[];
}

const PostDetails: NextPage<PostDetailsPageProps> = ({ post, comments }) => {
    return (
        <MainLayout className='mb-50' contentFullWidth>
            <FullPost
                title={post.title}
                description={post.description}
                body={post.body}
                author={post.author}
                views={post.views}
            />
            <PostComments comments={comments} />
        </MainLayout>
    );
};

export const getServerSideProps = async (ctx) => {
    try {
        const slug = ctx.params.slug;
        const post = await Api().post.getOneBySlug(slug);
        const comments = await Api().comment.getAll(post.id);

        return {
            props: {
                post,
                comments,
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
