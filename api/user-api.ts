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

    async singIn(token: string) {
        const response = await api.get('/auth/signin', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    }
}

export default new UserApi();
