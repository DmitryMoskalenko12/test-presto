import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import products from '../modules/products/productsSlice';
import product from '../components/detail-card-product/detailCardSlice';
import basket from '../modules/basket/basketSlice';

export const store = configureStore({
    reducer: {products, product, basket},
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector