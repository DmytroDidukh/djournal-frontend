import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

// COMPONENTS
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
// UTILS & SERVICES
import { CommentDtoType } from 'api/types';

interface PostCommentsProps {
    comments: CommentDtoType[];
}

export const PostComments: React.FC<PostCommentsProps> = ({ comments }) => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Paper elevation={0} className='mt-40 p-30'>
            <div className='container'>
                {!!comments.length && (
                    <Typography variant='h6' className='mb-20'>
                        {comments.length}
                    </Typography>
                )}
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    className='mt-20'
                    value={activeTab}
                    indicatorColor='primary'
                    textColor='primary'
                >
                    <Tab label='Popular' />
                    <Tab label='In order' />
                </Tabs>
                <Divider />
                <AddCommentForm />
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
