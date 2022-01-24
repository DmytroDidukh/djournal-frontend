import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowBackOutlined as ArrowBackIcon } from '@material-ui/icons';
// CONST
import { AuthFormEnumType } from '../../../consts/enums';
// STYLES
import styles from '../AuthDialog.module.scss';

interface FormHeaderProps {
    authFormType: AuthFormEnumType;
    onClick: (AuthFormEnumType) => void;
}

type FormHeaderValueType = {
    [AuthFormEnumType.MAIN]: string;
    [AuthFormEnumType.EMAIL]: string;
    [AuthFormEnumType.REGISTRATION]: string;
};

const FORM_HEADER_VALUE: FormHeaderValueType = {
    [AuthFormEnumType.MAIN]: 'Log in to DJournal',
    [AuthFormEnumType.EMAIL]: 'Log in with Email',
    [AuthFormEnumType.REGISTRATION]: 'Registration',
};

export const FormHeader: React.FC<FormHeaderProps> = ({ authFormType, onClick }) => (
    <Typography className='mb-20 d-flex justify-center align-center' variant='h5'>
        {authFormType !== AuthFormEnumType.MAIN && (
            <ArrowBackIcon className={styles.back} onClick={() => onClick(AuthFormEnumType.MAIN)} />
        )}
        {FORM_HEADER_VALUE[authFormType]}
    </Typography>
);
