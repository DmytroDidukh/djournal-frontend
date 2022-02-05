import * as yup from 'yup';

const defaultSchema = {
    email: yup.string().email('Wrong email.').required('No email provided.'),
    password: yup
        .string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too long - should be 16 chars maximum.')
        .matches(/[a-zA-Z0-9]{8,16}/, 'Password can only contain Latin letters and numbers.'),
};

export const LoginFormSchema = yup.object().shape({ ...defaultSchema });

export const RegistrationFormSchema = yup.object().shape({
    ...defaultSchema,
    fullName: yup
        .string()
        .required('No name or surname provided.')
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain Latin letters.',
        )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
