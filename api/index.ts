import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import Cookies, { parseCookies } from 'nookies';

// CONST
import { COOKIE_TOKEN_NAME } from 'consts';
// UTILS & SERVICES
import UserApi, { UserApiInterface } from './user';
import PostApi, { PostApiInterface } from './post';

export type ApiReturnType = {
    user: UserApiInterface;
    post: PostApiInterface;
};

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();
    const token = cookies[COOKIE_TOKEN_NAME];

    const instance = axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return {
        user: new UserApi(instance),
        post: new PostApi(instance),
    };
};
