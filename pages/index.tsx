import { NextPage } from 'next';

// COMPONENTS
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
// UTILS & SERVICES
import { AppState } from 'store';
import { Api } from 'api';
import { PostDtoType } from 'api/types';

interface HomeProps {
    posts: PostDtoType[];
}

const Home: NextPage<HomeProps & AppState> = ({ posts }) => {
    console.log(posts);

    return (
        <MainLayout>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </MainLayout>
    );
};

export const getServerSideProps = async () => {
    try {
        const posts = await Api().post.getAll();

        return {
            props: {
                posts,
            },
        };
    } catch (err) {
        console.log(err);
    }

    return {
        props: {
            posts: null,
        },
    };
};

export default Home;
