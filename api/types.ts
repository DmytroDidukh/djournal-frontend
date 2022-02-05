import { OutputBlockData } from '@editorjs/editorjs';

/**
 * User Types
 * */
export type LoginUserDtoType = {
    email: string;
    password: string;
};

export type RegisterUserDtoType = {
    email: string;
    password: string;
    fullName: string;
};

export type UserDtoType = {
    id: number;
    email: string;
    fullName: string;
    createdAt: string;
    token?: string;
};

/**
 * Post Types
 * */
export type CreatePostDtoType = {
    title: string;
    description: string;
    body?: OutputBlockData[];
    tags?: string[];
};

export type PostDtoType = {
    id: number;
    title: string;
    slug: string;
    author: UserDtoType;
    description: string;
    body?: OutputBlockData[];
    views: number;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
};
