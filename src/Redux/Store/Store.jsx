import { configureStore } from '@reduxjs/toolkit';
import LikeSlice from '../LikeSlice/LikeSlice';


const Store =configureStore({
    reducer:{
        Liked:LikeSlice,
    }
})


export default Store;
