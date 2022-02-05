import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { AppDispatch, AppState } from './index';
import { userActions } from './slices/user';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const allActions = {
    ...userActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(allActions, dispatch);
};
