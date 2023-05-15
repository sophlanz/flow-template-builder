import { TemplateBuilderModel } from "../models/redux-models";
//deafult image to load into header
import headerImage from '../assets/images/headerDefault.jpg'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const inititalTemplateBuilderState:TemplateBuilderModel={
    header:headerImage,
    bodyMessage:'We have an exciting offer. Are you interested in hearing more?',
    footer:`Reply 'STOP' top opt out`,
    buttons:['Talk to a styling expert']
};
const templateBuilderSlice=createSlice({
    name:'templateBuilder',
    initialState: inititalTemplateBuilderState,
    reducers:{
        //set header
        setHeader(state,action:PayloadAction<string>){
            state.header=action.payload;
        },
        //set bodyMessage
        setBodyMessage(state,action:PayloadAction<string>){
            state.bodyMessage=action.payload;
        },
        //set footer
        setFooter(state,action:PayloadAction<string>){
            state.footer=action.payload;
        },
        //set buttons
        setButtons(state,action:PayloadAction<string[]>){
            state.buttons=action.payload;
        }
    }
})

export const {setHeader} = templateBuilderSlice.actions;
export const {setBodyMessage} = templateBuilderSlice.actions;
export const {setFooter} = templateBuilderSlice.actions;
export const {setButtons} = templateBuilderSlice.actions;
export default templateBuilderSlice;
