import { createSlice,PayloadAction } from '@reduxjs/toolkit'


type initialStateType ={
  
    TabLike:any[],
    TabCart:any[],
    imgs:string,
    title:string,
    prix:string,
    dscr:string,
    taille:string,
    arrayImg:any[],
    id:string,
    stotal:any[]
   
}

const initialState:initialStateType ={
  TabLike:[],
  TabCart:[],
  imgs:'',
  title:'',
  prix:'',
  dscr:'',
  taille:'',
  arrayImg:[],
  id:'',
  stotal:[]
    };
export const LikeSlice = createSlice(
    {
    name: 'liked',
    initialState,
    reducers: {
      addCart: (state,action:PayloadAction<any>) => {
        //console.log('id====',action.payload.id)
         if(state.TabCart.includes(action.payload.id)){
           const index = state.TabCart.indexOf(action.payload.id)
           if(index>=0){state.TabCart.splice(index,1)}
            // console.log('deux fois chriki')
         }else{
            state.TabCart.push(action.payload.id)
         }
        },
      addLiked: (state,action:PayloadAction<any>) => {
        //console.log('id====',action.payload.id)
         if(state.TabLike.includes(action.payload.id)){
           const index = state.TabLike.indexOf(action.payload.id)
           if(index>=0){state.TabLike.splice(index,1)}
            // console.log('deux fois chriki')
         }else{
            state.TabLike.push(action.payload.id)
         }
        },
        addImg:(state,action:PayloadAction<any>) => {
          state.imgs=action.payload.imgs
          },
        addTitle:(state,action:PayloadAction<any>) => {
            state.title=action.payload.title
            },
        addPrix:(state,action:PayloadAction<any>) => {
              state.prix=action.payload.prix
              },
        addDscr:(state,action:PayloadAction<any>) => {
                state.dscr=action.payload.dscr
                },
        addTaille:(state,action:PayloadAction<any>) => {
                  state.taille=action.payload.taille
                  },
        addArrayImg:(state,action:PayloadAction<any>) => {
                    state.arrayImg=action.payload.arrayImg
                    },
        addId:(state,action:PayloadAction<any>) => {
                      state.id=action.payload.id
                      },
        subTotal:(state,action:PayloadAction<any>) => {
                        state.stotal=action.payload.stotal
                        },
    },
  })
export const { addLiked,addImg,addDscr,addPrix,addTitle,addTaille,addArrayImg,addCart,addId,subTotal} = LikeSlice.actions

export default LikeSlice.reducer