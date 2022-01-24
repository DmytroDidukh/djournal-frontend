import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, AppState } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
