import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

// COMPONENTS
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
// CONST
import { COOKIE_TOKEN_NAME } from 'consts';
// UTILS & SERVICES
import { AppState, reduxWrapper } from 'store';
import { setUserData } from 'store/slices/user';
import UserApi from 'api/user-api';

const Home: NextPage<AppState> = () => {
    return (
        <MainLayout>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = reduxWrapper.getServerSideProps(
    (store) => async (ctx) => {
        try {
            const cookies = parseCookies(ctx);
            const user = await UserApi.singIn(cookies[COOKIE_TOKEN_NAME]);

            store.dispatch(setUserData(user));

            return {
                props: {},
            };
        } catch (err) {
            return { props: {} };
        }
    },
);

export default Home;
