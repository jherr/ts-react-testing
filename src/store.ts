import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CounterState{
    value: number;
}
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementBy: (state, action:PayloadAction<number>)=>{
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, incrementBy} = counterSlice.actions;

export const createStore =()=> configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})
export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch