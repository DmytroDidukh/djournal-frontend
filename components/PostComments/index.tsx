import React, { useEffect } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

// COMPONENTS
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
// UTILS & SERVICES
import { CommentDtoType } from 'api/types';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/slices/user';

interface PostCommentsProps {
    postId: number;
    comments: CommentDtoType[];
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId, comments: _comments }) => {
    const isAuth = !!useAppSelector(selectUser);
    const [activeTab, setActiveTab] = React.useState(0);
    const [comments, setComments] = React.useState(_comments || []);

    useEffect(() => {
        if (activeTab === 0) {
            setComments(
                comments.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                ),
            );
        } else if (activeTab === 1) {
            setComments(
                comments.sort(
                    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
                ),
            );
        }
    }, [activeTab, comments]);

    const onSuccessAdd = (comment: CommentDtoType): void => {
        setComments((prev) => [comment, ...prev]);
    };

    return (
        <Paper elevation={0} className='mt-40 p-30'>
            <div className='container'>
                {!!comments.length && (
                    <Typography variant='h6' className='mb-20'>
                        {comments.length} comments
                    </Typography>
                )}
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    className='mt-20'
                    value={activeTab}
                    indicatorColor='primary'
                    textColor='primary'
                >
                    <Tab label='In order' />
                    <Tab label='Popular' />
                </Tabs>
                <Divider />
                {isAuth && <AddCommentForm postId={postId} onSuccessAdd={onSuccessAdd} />}
                <div className='mb-20' />
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        author={comment.author}
                        text={comment.text}
                        createdAt={comment.createdAt}
                    />
                ))}
            </div>
        </Paper>
    );
};
