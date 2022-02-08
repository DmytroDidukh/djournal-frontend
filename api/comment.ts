import { AxiosInstance } from 'axios';

import { CommentDtoType, CreateCommentDtoType } from './types';

export interface CommentApiInterface {
    getAll(postId?: number): Promise<CommentDtoType[]>;
    getOneById(id: number): Promise<CommentDtoType>;
    create(dto: CreateCommentDtoType): Promise<CommentDtoType>;
    update(id: number, dto: CommentDtoType): Promise<CommentDtoType>;
}

class CommentApi implements CommentApiInterface {
    apiInstance: AxiosInstance;

    constructor(axiosInstance) {
        this.apiInstance = axiosInstance;
    }

    async getAll(postId) {
        const response = await this.apiInstance.get(`/comment${postId ? `?postId=${postId}` : ''}`);

        return response.data;
    }

    async getOneById(id) {
        const response = await this.apiInstance.get(`/comment/${id}`);

        return response.data;
    }

    async create(dto) {
        const response = await this.apiInstance.post('/comment', dto);

        return response.data;
    }

    async update(id, dto) {
        const response = await this.apiInstance.patch(`/comment/${id}`, dto);

        return response.data;
    }
}

export default CommentApi;
