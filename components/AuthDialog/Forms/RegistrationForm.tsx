import React from 'react';
import { Button } from '@material-ui/core';

import { AuthFormEnumType } from '../../../consts/enums';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegistrationFormSchema } from '../../../utils/schemas/validations';
import { FormField } from '../../FormField';

interface RegistrationFormProps {
    onLoginClick: (AuthFormEnumType) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLoginClick }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegistrationFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <FormField name='username' label='Name and surname' className='mb-20' />
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
                <div className='d-flex align-center'>
                    <Button className='mr-10' color='primary' variant='contained' type='submit'>
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
