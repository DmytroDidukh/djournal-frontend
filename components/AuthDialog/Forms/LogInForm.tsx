import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthFormEnumType } from '../../../consts/enums';
import { LoginFormSchema } from '../../../utils/schemas/validations';
import { FormField } from '../../FormField';

interface LogInFormProps {
    onClick: (AuthFormEnumType) => void;
}

export const LogInForm: React.FC<LogInFormProps> = ({ onClick }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <FormField name='email' label='Email' className='mb-20' />
                <FormField name='password' label='Password' className='mb-20' type='password' />
                <div className='d-flex align-center'>
                    <Button type='submit' color='primary' variant='contained'>
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
