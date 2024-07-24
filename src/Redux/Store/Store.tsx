import { configureStore } from '@reduxjs/toolkit';
import LikeSlice from '../LikeSlice/LikeSlice';


const Store =configureStore({
    reducer:{
        Liked:LikeSlice,
    }
})

export type RootState =ReturnType<typeof Store.getState>
export type AppDispatch=typeof Store.dispatch;

export default Store;
