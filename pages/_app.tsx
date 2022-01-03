import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import { Header } from '../components/Header';
import { AuthDialogProvider } from '../components/AuthDialog/AuthDialogProvider';
import { theme } from '../theme';

import '../styles/globals.scss';
import 'macro-css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>RJournal</title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
                <link
                    /* eslint-disable-next-line max-len */
                    href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <AuthDialogProvider>
                    <Header />
                </AuthDialogProvider>
                <Component {...pageProps} />
            </MuiThemeProvider>
        </>
    );
}

export default MyApp;
