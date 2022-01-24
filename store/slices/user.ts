import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from '../index';
import { UserResponseDtoType } from 'api/types';

export interface UserState {
    data: UserResponseDtoType | null;
}

const initialState: UserState = {
    data: null,
};

// SLICE & REDUCER & ACTIONS
export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUserData: (state, action: PayloadAction<UserResponseDtoType>) => {
            state.data = action.payload;
        },
    },
});

export const { setUserData } = userSlice.actions;

// SELECTORS
export const selectUser = (state: AppState) => state.user.data;

export default userSlice.reducer;
