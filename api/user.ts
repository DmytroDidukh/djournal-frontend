import { AxiosInstance } from 'axios';

import { UserDtoType, LoginUserDtoType, RegisterUserDtoType } from './types';

export interface UserApiInterface {
    register(dto: RegisterUserDtoType): Promise<UserDtoType>;
    login(dto: LoginUserDtoType): Promise<UserDtoType>;
    singIn(): Promise<UserDtoType>;
}

class UserApi implements UserApiInterface {
    apiInstance: AxiosInstance;

    constructor(axiosInstance) {
        this.apiInstance = axiosInstance;
    }

    async register(dto) {
        const response = await this.apiInstance.post('/auth/register', dto);

        return response.data;
    }

    async login(dto) {
        const response = await this.apiInstance.post('/auth/login', dto);

        return response.data;
    }

    async singIn() {
        const response = await this.apiInstance.get('/auth/signin');

        return response.data;
    }
}

export default UserApi;
