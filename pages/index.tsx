import { GetServerSideProps } from 'next';

// COMPONENTS
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
// UTILS & SERVICES
import { reduxWrapper } from 'store';

export default function Home() {
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
}

export const getServerSideProps: GetServerSideProps = reduxWrapper.getServerSideProps(
    (store) => async (ctx) => {
        console.log(store);
        console.log(ctx);
        return {
            props: {},
        };
    },
);
