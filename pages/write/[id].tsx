import { NextPage } from 'next';

// COMPONENTS
import { MainLayout } from 'layouts/MainLayout';
import { WriteForm } from 'components/WriteForm';
// UTILS & SERVICES
import { Api } from 'api';
import { PostDtoType } from 'api/types';
import { reduxWrapper } from 'store';

interface WritePageProps {
    post: PostDtoType;
}

const WritePage: NextPage<WritePageProps> = ({ post }) => {
    return (
        <MainLayout className='main-layout-white' hideComments hideMenu>
            <WriteForm data={post} />
        </MainLayout>
    );
};

export const getServerSideProps = reduxWrapper.getServerSideProps((store) => async (ctx) => {
    try {
        const id = Number(ctx.params.id);
        const user = store.getState().user.data;
        const post = await Api().post.getOneById(id, true);

        if (post.author.id !== user.id) {
            throw new Error();
        }

        return {
            props: {
                post,
            },
        };
    } catch (err) {
        console.log(err);
    }

    return {
        props: {},
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
});

export default WritePage;
