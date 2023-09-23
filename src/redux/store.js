import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducser.js';



const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;



export const server = `https://coursebundler-lfiw.onrender.com/api/v1`;