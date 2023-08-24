import { configureStore } from "@reduxjs/toolkit";
import { siswaSlice } from "./slice/siswaSlice";
import pakarSlice from "./slice/pakarSlice";

export default configureStore({
    reducer: {
        siswa: siswaSlice,
        pakar : pakarSlice
    }
})
