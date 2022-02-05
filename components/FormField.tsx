import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
    name: string;
    label: string;
    className?: string;
    type?: TextFieldProps['type'];
    size?: TextFieldProps['size'];
    variant?: TextFieldProps['variant'];
}

export const FormField: React.FC<FormFieldProps> = ({
    name,
    className,
    size,
    label,
    variant,
    type,
}) => {
    const { register, formState } = useFormContext();

    return (
        <TextField
            {...register(name)}
            type={type}
            name={name}
            className={className || ''}
            size={size || 'small'}
            label={label}
            variant={variant || 'outlined'}
            helperText={formState.errors[name]?.message}
            error={!!formState.errors[name]?.message}
            fullWidth
            required
        />
    );
};
