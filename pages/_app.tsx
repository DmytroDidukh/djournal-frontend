import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import 'macro-css';

// COMPONENTS
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
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
    const [isLoading, setIsLoading] = useState(false);
    const [loadingAnimationDuration, setLoadingAnimationDuration] = useState('auto');

    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setLoadingAnimationDuration('1s');
            setTimeout(() => {
                setIsLoading(false);
                // Return animation default duration
                setLoadingAnimationDuration('auto');
            }, 500);
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };

        // eslint-disable-next-line
    }, []);

    console.log(loadingAnimationDuration);

    return (
        <>
            <Head>
                <title>DJournal</title>
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
                {isLoading && <Loader duration={loadingAnimationDuration} />}
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
