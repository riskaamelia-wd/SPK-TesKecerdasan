import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const siswaSlice = createSlice({
    name: 'siswa',
    initialState,
    reducers:{
        addSiswaGlobal:(state, action) => {
            return [...state, action.payload]
        },
        updateSiswaGlobal:(state, action) => {
            return  state = action.payload
        },
        deleteSiswaGlobal: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        }
    }
})

export const {addSiswaGlobal, updateSiswaGlobal, deleteSiswaGlobal} = siswaSlice.actions

export default siswaSlice.reducer