import React from 'react';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

// UTILS & SERVICES
import { UserDtoType } from 'api/types';
import { stringAvatar } from 'utils/string-to-color';
// STYLES
import styles from './Comment.module.scss';

interface CommentPostProps {
    author: UserDtoType;
    text: string;
    createdAt: Date;
}

export const Comment: React.FC<CommentPostProps> = ({ author, text, createdAt }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Avatar {...stringAvatar(author.fullName)} variant='circular' className='mr-10' />
                <b>{author.fullName}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>{text}</Typography>
            <span className={styles.replyBtn}>Reply</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
        </div>
    );
};
