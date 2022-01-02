import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton /*Avatar*/ } from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    //SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    //ExpandMoreOutlined as ArrowBottom,
    //NotificationsNoneOutlined as NotificationIcon,
    PersonOutline as UserIcon,
} from '@material-ui/icons';

import { Dialog } from '../Dialog';
import { DialogContext } from '../Dialog/DialogProvider';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const { setOpen } = React.useContext(DialogContext);

    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className='d-flex align-center'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href='/'>
                    <a>
                        <img height={35} className='mr-20' src='/static/img/logo.svg' alt='Logo' />
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder='Search...' />
                </div>

                <Link href='/write'>
                    <a>
                        <Button variant='contained' className={styles.penButton}>
                            New post
                        </Button>
                    </a>
                </Link>
            </div>
            <div className={styles.login} onClick={() => setOpen(true)}>
                <UserIcon />
                Log In
            </div>
            {/*<div className='d-flex align-center'>*/}
            {/*    <IconButton*/}
            {/*    >*/}
            {/*        <MessageIcon />*/}
            {/*    </IconButton>*/}
            {/*    <IconButton>*/}
            {/*        <NotificationIcon />*/}
            {/*    </IconButton>*/}
            {/*    <Link href='/profile/1'>*/}
            {/*        <a className='d-flex align-center'>*/}
            {/*            <Avatar*/}
            {/*                className={styles.avatar}*/}
            {/*                alt='Remy Sharp'*/}
            {/*                eslint-disable-next-line max-len */}
            {/*                src='https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'*/}
            {/*            />*/}
            {/*            <ArrowBottom />*/}
            {/*        </a>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <Dialog />
        </Paper>
    );
};

// TODO: #4
