import { createSlice } from '@reduxjs/toolkit'

export const LikeSlice = createSlice(
    {
    name: 'liked',
    initialState:{
      TabLike:[],
      imgs:''
        },

    reducers: {
      addLiked: (state,action) => {
        //console.log('id====',action.payload.id)
         if(state.TabLike.includes(action.payload.id)){
           const index = state.TabLike.indexOf(action.payload.id)
           if(index>=0){state.TabLike.splice(index,1)}
            // console.log('deux fois chriki')
         }else{
            state.TabLike.push(action.payload.id)
         }
        },
        addImg:(state,action) => {
          state.imgs=action.payload.imgs
          },
     
    },
  })
export const { addLiked,addImg} = LikeSlice.actions

export default LikeSlice.reducer