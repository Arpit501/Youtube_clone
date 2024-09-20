import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:'app',
    initialState:{
         isMenuOpen:false,
         whichComponent:null,
         videoInfo:null
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen =!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen =false;
        },
        whatHasRendered:(state,action)=>{
            state.whichComponent=action.payload;
        },
        addVideoInfo:(state,action)=>{
            state.videoInfo=action.payload;
        }
    }
})

export const {toggleMenu,closeMenu,whatHasRendered,addVideoInfo} = appSlice.actions
export default appSlice.reducer;