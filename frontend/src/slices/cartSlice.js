import {createSlice} from '@reduxjs/toolkit';
const initialState = localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):{cartItems:[]};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
});

export default cartSlice.reducer;