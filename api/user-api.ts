import { api } from '.';
import { UserResponseDtoType, LoginUserDtoType, RegisterUserDtoType } from './types';

class UserApi {
    async register(dto: RegisterUserDtoType): Promise<UserResponseDtoType> {
        const response = await api.post('/auth/register', dto);

        return response.data;
    }

    async login(dto: LoginUserDtoType): Promise<UserResponseDtoType> {
        const response = await api.post('/auth/login', dto);

        return response.data;
    }

    async singIn() {
        const data = await api.get('/auth/signin');

        return data;
    }
}

export default new UserApi();
