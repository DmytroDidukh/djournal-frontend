import React from 'react';
import { Dialog as DialogBase, DialogContent } from '@material-ui/core';

import { AuthFormEnumType } from '../../consts/enums';
import { AuthDialogContext } from './AuthDialogProvider';
import { MainForm } from './Forms/MainForm';
import { LogInForm } from './Forms/LogInForm';
import { RegistrationForm } from './Forms/RegistrationForm';
import { FormHeader } from './Forms/FormHeader';

import styles from './AuthDialog.module.scss';

export const AuthDialog: React.FC = () => {
    const { open, setOpen } = React.useContext(AuthDialogContext);
    const [authFormType, setAuthFormType] = React.useState<AuthFormEnumType>(AuthFormEnumType.MAIN);

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
            <DialogContent className='pb-30'>
                <FormHeader authFormType={authFormType} onClick={setAuthFormType} />
                {authFormType === AuthFormEnumType.MAIN && <MainForm onClick={setAuthFormType} />}
                {authFormType === AuthFormEnumType.EMAIL && <LogInForm onClick={setAuthFormType} />}
                {authFormType === AuthFormEnumType.REGISTRATION && (
                    <RegistrationForm onLoginClick={setAuthFormType} />
                )}
            </DialogContent>
        </DialogBase>
    );
};
