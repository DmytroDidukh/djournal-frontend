import { createTheme } from '@material-ui/core';

export const theme = createTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    palette: {
        primary: {
            main: '#a6dcf9',
        },
        secondary: {
            main: '#6c6c6c',
        },
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: 8,
            },
        },
        MuiPopover: {},
        MuiButton: {
            root: {
                borderRadius: '8px',
                textTransform: 'inherit',
                fontSize: 16,
                transition: 'background-color .2s ease',
                '&:active': {
                    boxShadow:
                        // eslint-disable-next-line max-len
                        '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
                    transform: 'translateY(1px)',
                },
            },
            contained: {
                backgroundColor: 'white',
                boxShadow:
                    // eslint-disable-next-line max-len
                    '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                '&:hover': {
                    backgroundColor: 'white',
                    boxShadow:
                        // eslint-disable-next-line max-len
                        '0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)',
                },
            },
            containedPrimary: {
                color: '#fff',
                backgroundColor: '#a6dcf9',
                '&:hover': {
                    backgroundColor: '#63c5fc',
                },
            },
        },
        MuiDialog: {
            paper: {
                boxShadow: null,
            },
        },
    },
});
