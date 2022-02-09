import { useContext, FC } from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
    PersonOutline as UserIcon,
} from '@material-ui/icons';

// COMPONENTS
import { AuthDialog } from '../AuthDialog';
import { AuthDialogContext } from '../AuthDialog/AuthDialogProvider';
// UTILS & SERVICES
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/slices/user';
// STYLES
import styles from './Header.module.scss';

export const Header: FC = () => {
    const userData = useAppSelector(selectUser);
    const { setOpen } = useContext(AuthDialogContext);

    return (
        <Paper classes={{ root: styles.root }} elevation={0} square>
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
            {userData ? (
                <div className='d-flex align-center'>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    <Link href='/profile/1'>
                        <a className='d-flex align-center'>
                            <Avatar
                                className={styles.avatar}
                                alt='Remy Sharp'
                                eslint-disable-next-line
                                max-len
                                /* eslint-disable-next-line max-len */
                                src='https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'
                            />
                            <ArrowBottom />
                        </a>
                    </Link>
                </div>
            ) : (
                <div className={styles.login} onClick={() => setOpen(true)}>
                    <UserIcon />
                    Login
                </div>
            )}
            <AuthDialog />
        </Paper>
    );
};
