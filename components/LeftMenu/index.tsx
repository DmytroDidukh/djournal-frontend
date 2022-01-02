import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss';

const menu = [
    { text: 'Feed', icon: <FireIcon />, path: '/' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Rating DJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Follows', icon: <ListIcon />, path: '/follows' },
];

export const LeftMenu: React.FC = () => {
    const router = useRouter();

    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <Button variant={router.pathname === obj.path ? 'contained' : 'text'}>
                                {obj.icon}
                                {obj.text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
