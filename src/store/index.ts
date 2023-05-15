import { configureStore } from '@reduxjs/toolkit';
import templateBuilderSlice from './template-builder.slice';
const store = configureStore({
    reducer:{
       templateBuilder: templateBuilderSlice.reducer
    }
})
//these will take care of tye types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;