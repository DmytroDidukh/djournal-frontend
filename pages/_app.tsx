import { AppProps } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import 'macro-css';

// COMPONENTS
import { Header } from 'components/Header';
import { AuthDialogProvider } from 'components/AuthDialog/AuthDialogProvider';
// UTILS & SERVICES
import { reduxWrapper } from 'store';
import { setUserData } from 'store/slices/user';
import { Api } from 'api';
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
        const user = await Api(ctx).user.singIn();

        store.dispatch(setUserData(user));
    } catch (err) {
        if (ctx.asPath === '/write') {
            ctx.res.writeHead(302, {
                Location: '/',
            });

            ctx.res.end();
        }

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
