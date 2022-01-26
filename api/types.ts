export type LoginUserDtoType = {
    email: string;
    password: string;
};

export type RegisterUserDtoType = {
    email: string;
    password: string;
    fullName: string;
};

export type UserResponseDtoType = {
    id: number;
    email: string;
    fullName: string;
    createdAt: string;
    token?: string;
};
