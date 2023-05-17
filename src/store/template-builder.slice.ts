import { TemplateBuilderModel, TemplateBuilderArrayModel } from "../models/redux-models";
//deafult image to load into header
import headerImage from '../assets/images/headerDefault.jpg'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft, produce } from 'immer';
const initialTemplateBuilderModelState:TemplateBuilderArrayModel={
    specific_template:{
        header:headerImage,
        bodyMessage:'We have an exciting offer. Are you interested in hearing more?',
        footer:`Reply 'STOP' top opt out`,
        buttons:[
        'Talk to a styling expert',
        'Sure!',
        'Maybe next time'
        ],
        campaign:'Summer Discounts',
        id:'0'
    },
    all_templates:[] 
};
const templateBuilderSlice=createSlice({
    name:'templateBuilder',
    initialState: initialTemplateBuilderModelState,
    reducers:{
        //set header
        setHeader(state,action:PayloadAction<string>){
            state.specific_template.header=action.payload;
        },
        //set bodyMessage
        setBodyMessage(state,action:PayloadAction<string>){
            state.specific_template.bodyMessage=action.payload;
        },
        //set footer
        setFooter(state,action:PayloadAction<string>){
            state.specific_template.footer=action.payload;
        },
        //set buttons
        setButtons(state,action:PayloadAction<string[]>){
            state.specific_template.buttons=action.payload;
        },
        //set campaign name
        setCampaign(state,action:PayloadAction<string>){
            state.specific_template.campaign=action.payload
        },
        setId(state,action:PayloadAction<string>){
            state.specific_template.id=action.payload
        },
        /*push new template to templates array*/
        pushToTemplatesArray(state,action:PayloadAction<TemplateBuilderModel>){
            const newTemplate:Draft<TemplateBuilderModel>={
                ...action.payload
            }
            //to avoid mutating state directly
            return produce(state,(draftState)=>{
                draftState.all_templates.push(newTemplate)
            })
        
        },
        /*set entire specific_template object */
        setSpecificTemplate(state,action:PayloadAction<TemplateBuilderModel>){
            state.specific_template=action.payload
        },
        /*update a template already in templates array*/
        updateTemplatesArray(state,action:PayloadAction<TemplateBuilderModel>){
            //map current state, when we reach id that matches, replace the old template with new one.
            const updatedTemplate=action.payload
            const updatedArray:TemplateBuilderModel[] = state.all_templates.map((template)=>
                template.id===updatedTemplate.id ? updatedTemplate : template
            );
            state.all_templates=updatedArray;
        },
        deleteFromTemplatesArray(state, action:PayloadAction<TemplateBuilderModel>){
            const templateToDelete=action.payload
            const updatedArray=state.all_templates.filter(
                (template)=>template.id !==templateToDelete.id
            );
            return{
                ...state,
                all_templates:updatedArray
            }
        
        }
    }
})

export const {setHeader} = templateBuilderSlice.actions;
export const {setBodyMessage} = templateBuilderSlice.actions;
export const {setFooter} = templateBuilderSlice.actions;
export const {setButtons} = templateBuilderSlice.actions;
export const {setCampaign}= templateBuilderSlice.actions;
export const {setId}= templateBuilderSlice.actions;
export const {pushToTemplatesArray}= templateBuilderSlice.actions;
export const {setSpecificTemplate}= templateBuilderSlice.actions;
export const {updateTemplatesArray}= templateBuilderSlice.actions;
export const {deleteFromTemplatesArray}= templateBuilderSlice.actions;
export default templateBuilderSlice;
