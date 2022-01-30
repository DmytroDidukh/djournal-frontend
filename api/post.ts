import { AxiosInstance } from 'axios';

import { CreatePostDtoType, PostDtoType } from './types';

export interface PostApiInterface {
    getAll(): Promise<PostDtoType[]>;
    getOneById(id: number): Promise<PostDtoType>;
    create(dto: CreatePostDtoType): Promise<PostDtoType>;
}

class PostApi implements PostApiInterface {
    apiInstance: AxiosInstance;

    constructor(axiosInstance) {
        this.apiInstance = axiosInstance;
    }

    async getAll() {
        const response = await this.apiInstance.get('/post');

        return response.data;
    }

    async getOneById(id) {
        const response = await this.apiInstance.get('/post/:id', id);

        return response.data;
    }

    async create(dto) {
        const response = await this.apiInstance.post('/post', dto);

        return response.data;
    }
}

export default PostApi;
