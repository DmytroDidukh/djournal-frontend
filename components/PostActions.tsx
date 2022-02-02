import React, { CSSProperties } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
    Visibility as VisibilityIcon,
} from '@material-ui/icons';

const styles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '5',
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

interface PostActionsProps {
    views: number;
}

export const PostActions: React.FC<PostActionsProps> = ({ views }) => {
    return (
        <ul style={styles}>
            <li>
                <IconButton>
                    <CommentsIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
            <li>
                <IconButton disabled>
                    <VisibilityIcon />
                    <Typography
                        variant='subtitle2'
                        display='inline'
                        color='textSecondary'
                        className='ml-5'
                    >
                        {views}
                    </Typography>
                </IconButton>
            </li>
        </ul>
    );
};
