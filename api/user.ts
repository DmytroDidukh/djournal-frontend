import { UserResponseDtoType, LoginUserDtoType, RegisterUserDtoType } from './types';
import { AxiosInstance } from 'axios';

export interface UserApiInterface {
    register(dto: RegisterUserDtoType): Promise<UserResponseDtoType>;
    login(dto: LoginUserDtoType): Promise<UserResponseDtoType>;
    singIn(): Promise<UserResponseDtoType>;
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
