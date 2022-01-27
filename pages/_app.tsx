import { AppProps } from 'next/app';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import 'macro-css';

// COMPONENTS
import { Header } from 'components/Header';
import { AuthDialogProvider } from 'components/AuthDialog/AuthDialogProvider';
// CONST
import { COOKIE_TOKEN_NAME } from 'consts';
// UTILS & SERVICES
import { reduxWrapper } from 'store';
import { setUserData } from 'store/slices/user';
import UserApi from 'api/user-api';
// OTHER
import { theme } from '../theme';
// STYLES
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
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
};

App.getInitialProps = reduxWrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
    try {
        const cookies = parseCookies(ctx);
        const user = await UserApi.singIn(cookies[COOKIE_TOKEN_NAME]);

        store.dispatch(setUserData(user));
    } catch (err) {
        console.error(err);
    }

    return {
        pageProps: {
            ...(Component.getInitialProps
                ? await Component.getInitialProps({ ...ctx, store })
                : {}),
        },
    };
});

export default reduxWrapper.withRedux(App);
