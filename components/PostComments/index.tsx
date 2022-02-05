import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

// COMPONENTS
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
// OTHER
import data from 'data';

export const PostComments: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

    return (
        <Paper elevation={0} className='mt-40 p-30'>
            <div className='container'>
                <Typography variant='h6' className='mb-20'>
                    42 comments
                </Typography>
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
                {comments.map((obj) => (
                    <Comment
                        key={obj.id}
                        user={obj.user}
                        text={obj.text}
                        createdAt={obj.createdAt}
                    />
                ))}
            </div>
        </Paper>
    );
};
