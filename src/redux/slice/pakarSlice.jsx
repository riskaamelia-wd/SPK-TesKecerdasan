import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const pakarSlice = createSlice({
    name: 'pakar',
    initialState,
    reducers:{
        addPakarGlobal:(state, action) => {
            return [...state, action.payload]
        },
        updatePakarGlobal:(state, action) => {
            return  state = action.payload
        },
        deletePakarGlobal: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        }
    }
})

export const {addPakarGlobal, updatePakarGlobal, deletePakarGlobal} = pakarSlice.actions

export default pakarSlice.reducer