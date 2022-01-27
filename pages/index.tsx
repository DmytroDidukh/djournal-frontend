import { NextPage } from 'next';

// COMPONENTS
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
// UTILS & SERVICES
import { AppState } from 'store';

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

export default Home;
