import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@material-ui/core';
import { EmailOutlined as EmailIcon, Facebook as FacebookIcon } from '@material-ui/icons';
// COMPONENTS
import GoogleIcon from 'icons/google.svg';
// CONST
import { AuthFormEnumType } from 'consts/enums';
// STYLES
import styles from '../AuthDialog.module.scss';

interface MainFormProps {
    onClick: (AuthFormEnumType) => void;
}

export const MainForm: React.FC<MainFormProps> = ({ onClick }) => {
    return (
        <div>
            <Button fullWidth className={clsx('mb-5 mt-5', styles.btn)} variant='contained'>
                <FacebookIcon className='mr-10' />
                <span>Facebook</span>
            </Button>
            <Button fullWidth className={clsx('mb-5 mt-5', styles.btn)} variant='contained'>
                <Image src={GoogleIcon} width={24} height={24} />
                <span>Google</span>
            </Button>
            <Button
                fullWidth
                className={clsx('mb-5 mt-5', styles.btn)}
                variant='contained'
                onClick={() => onClick(AuthFormEnumType.EMAIL)}
            >
                <EmailIcon className='mr-10' />
                <span>Email</span>
            </Button>
        </div>
    );
};
