import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import userReducer, { userSlice } from './slices/user';

export const makeStore = () =>
    configureStore({
        reducer: { [userSlice.name]: userReducer },
    });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export const reduxWrapper = createWrapper<AppStore>(makeStore, { debug: true });
