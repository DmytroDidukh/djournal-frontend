import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// UTILS & SERVICES
import type { AppState } from '../index';
import { UserDtoType } from 'api/types';

export interface UserState {
    data: UserDtoType | null;
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
        setUserData: (state, action: PayloadAction<UserDtoType>) => {
            state.data = action.payload;
        },
    },
    extraReducers: {
        // Runs on SSR
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
});

// SEPARATE ACTIONS
export const { setUserData } = userSlice.actions;

// SELECTORS
export const selectUser = (state: AppState) => state.user.data;

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
