import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { setCookie } from 'nookies';

// COMPONENTS
import { FormField } from '../../FormField';

// CONST
import { AuthFormEnumType } from '../../../consts/enums';
import { COOKIE_TOKEN_NAME } from '../../../consts';

// UTILS & SERVICES
import UserApi from '../../../api/user-api';
import { LoginFormSchema } from '../../../utils/schemas/validations';

interface LogInFormProps {
    onClick: (AuthFormEnumType) => void;
}

export const LogInForm: React.FC<LogInFormProps> = ({ onClick }) => {
    const [errorForm, setErrorForm] = useState(null);

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema),
    });

    const onSubmit = async (userData) => {
        try {
            const responseData = await UserApi.login(userData);

            setCookie(null, COOKIE_TOKEN_NAME, responseData.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            setErrorForm(null);
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
                <FormField name='email' label='Email' className='mb-20' />
                <FormField name='password' label='Password' className='mb-20' type='password' />
                {errorForm && (
                    <Alert severity='error' className='mb-20'>
                        {errorForm.message}
                    </Alert>
                )}
                <div className='d-flex align-center'>
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                    >
                        Log In
                    </Button>
                    <Button
                        color='primary'
                        variant='outlined'
                        className='ml-10'
                        onClick={() => onClick(AuthFormEnumType.REGISTRATION)}
                    >
                        Registration
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
