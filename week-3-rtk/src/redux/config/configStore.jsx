import todos from "../module/todos";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todos:todos,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;