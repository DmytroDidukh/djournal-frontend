import React, { SVGProps } from 'react';
import clsx from 'clsx';
import {
    Button,
    Dialog as DialogBase,
    DialogContent,
    DialogContentText,
    TextField,
    Typography,
} from '@material-ui/core';
import {
    Facebook as FacebookIcon,
    EmailOutlined as EmailIcon,
    ArrowBackOutlined as ArrowBackIcon,
} from '@material-ui/icons';
import { DialogContext } from './DialogProvider';

import styles from './Dialog.module.scss';

const GoogleIcon: React.FC<SVGProps<SVGSVGElement>> = () => (
    <svg
        className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='GoogleIcon'
    >
        {/* eslint-disable-next-line max-len */}
        <path d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z'></path>
    </svg>
);

enum FormLoginType {
    MAIN = 'main',
    EMAIL = 'email',
}

export const Dialog: React.FC = () => {
    const { open, setOpen } = React.useContext(DialogContext);
    const [formLoginType, setFormLoginType] = React.useState<FormLoginType>(FormLoginType.MAIN);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DialogBase
            open={open}
            onClose={handleClose}
            aria-labelledby='responsive-dialog-title'
            maxWidth='xs'
            className={styles.root}
        >
            <DialogContent>
                <DialogContentText>
                    <Typography className={styles.title}>
                        {formLoginType !== FormLoginType.MAIN && (
                            <ArrowBackIcon
                                className={styles.back}
                                onClick={() => setFormLoginType(FormLoginType.MAIN)}
                            />
                        )}
                        {formLoginType === FormLoginType.MAIN
                            ? 'Log in to DJournal'
                            : 'Log in with Email'}
                    </Typography>
                    {formLoginType === FormLoginType.MAIN && (
                        <>
                            <Button
                                fullWidth
                                className={clsx('mb-5 mt-5', styles.btn)}
                                variant='contained'
                            >
                                <FacebookIcon className='mr-10' />
                                <span>Facebook</span>
                            </Button>
                            <Button
                                fullWidth
                                className={clsx('mb-5 mt-5', styles.btn)}
                                variant='contained'
                            >
                                <GoogleIcon className='mr-10' />
                                <span>Google</span>
                            </Button>
                            <Button
                                fullWidth
                                className={clsx('mb-5 mt-5', styles.btn)}
                                variant='contained'
                                onClick={() => setFormLoginType(FormLoginType.EMAIL)}
                            >
                                <EmailIcon className='mr-10' />
                                <span>Email</span>
                            </Button>
                        </>
                    )}
                    {formLoginType === FormLoginType.EMAIL && (
                        <form>
                            <TextField
                                className='mb-20 mt-20'
                                size='small'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                required
                            />
                            <TextField
                                type='password'
                                className='mb-20'
                                size='small'
                                label='Password'
                                variant='outlined'
                                fullWidth
                                required
                            />
                            <Button color='primary' variant='contained'>
                                Log In
                            </Button>
                        </form>
                    )}
                </DialogContentText>
            </DialogContent>
        </DialogBase>
    );
};
