import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { useForm, FormProvider } from 'react-hook-form';
import { AxiosError } from 'axios';

// COMPONENTS
import { FormField } from '../../FormField';
// CONST
import { AuthFormEnumType } from 'consts/enums';
import { COOKIE_TOKEN_NAME } from 'consts';
// UTILS & SERVICES
import { RegistrationFormSchema } from 'utils/schemas/validations';
import { AuthDialogContext } from '../AuthDialogProvider';
import { useActions } from 'store/hooks';
import { Api } from 'api';

interface RegistrationFormProps {
    onLoginClick: (AuthFormEnumType) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLoginClick }) => {
    const { setUserData } = useActions();
    const [errorForm, setErrorForm] = useState(null);
    const { setOpen } = useContext(AuthDialogContext);

    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(RegistrationFormSchema),
    });

    const onSubmit = async (userData) => {
        try {
            const user = await Api().user.register(userData);

            setCookie(null, COOKIE_TOKEN_NAME, user.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            setUserData(user);

            setErrorForm(null);
            setOpen(false);
        } catch (err) {
            if (err.response) {
                const _err: AxiosError = err;
                setErrorForm(_err.response.data);
            } else {
                setErrorForm(err);
            }
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <FormField name='fullName' label='Name and surname' className='mb-20' />
                <FormField name='email' label='Email' className='mb-20 mt-20' />
                <FormField
                    name='password'
                    label='Password'
                    className='mb-20 mt-20'
                    type='password'
                />
                <FormField
                    name='confirmPassword'
                    label='Confirm password'
                    className='mb-20 mt-20'
                    type='password'
                />
                {errorForm && (
                    <Alert severity='error' className='mb-20'>
                        {errorForm.message}
                    </Alert>
                )}
                <div className='d-flex align-center'>
                    <Button
                        className='mr-10'
                        color='primary'
                        variant='contained'
                        type='submit'
                        disabled={form.formState.isSubmitting}
                    >
                        Registration
                    </Button>
                    <Button
                        color='primary'
                        variant='outlined'
                        onClick={() => onLoginClick(AuthFormEnumType.EMAIL)}
                    >
                        Log In
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
