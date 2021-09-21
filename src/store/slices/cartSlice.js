import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from '../../firebase';
import { closeModal } from "./modalSlice";
import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    items: [],
    loading: false,
    error: '',
}

//notify^^^^^^^^^^^^^^^^^^^^^^^^^^
const notify = (title) => toast(<div><p>Добавлено</p>{title}</div>);

//async actions---------------------------------------------------------------------
export const fetchCart = createAsyncThunk(
    'cartSlice/fetchCart',
    async (_, { rejectWithValue }) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('cart').get();
            db.forEach(response => firebaseData.push({ id: response.id, ...response.data() }))
            return firebaseData;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const addToCart = createAsyncThunk(
    'cartSlice/addToCart',
    async (data, { getState, dispatch, rejectWithValue }) => {
        let cartItems = getState().cart.items;
        let alreadyInCart = cartItems.find(obj => obj.id === data.id);

        if (alreadyInCart) {
            dispatch(incrementCart(alreadyInCart));
        } else {
            try {
                let db = await firebase.firestore().collection('cart').doc(data.id).set({ ...data, count: 1 });
                dispatch(fetchCart());
                notify(data.title);
                dispatch(closeModal());
                return db;
            } catch (error) {
                return rejectWithValue(error.response.data)
            }
        }
    }
)
export const incrementCart = createAsyncThunk(
    'cartSlice/incrementCart',
    async (data, { dispatch, rejectWithValue }) => {
        let increasedData = {
            count: data.count + 1,
        }
        try {
            let db = await firebase.firestore().collection('cart').doc(data.id).update(increasedData);
            dispatch(fetchCart());
            dispatch(closeModal());
            return db;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const decrementCart = createAsyncThunk(
    'cartSlice/decrementCart',
    async (data, { dispatch, rejectWithValue }) => {
        let decreasedData = {
            ...data,
            count: data.count === 1 ? dispatch(deleteFromCart(data.id)) : data.count - 1,
        }
        try {
            let db = await firebase.firestore().collection('cart').doc(data.id).update(decreasedData);
            dispatch(fetchCart());
            return db;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const deleteFromCart = createAsyncThunk(
    'cartSlice/deleteFromCart',
    async (id, { dispatch, rejectWithValue }) => {

        try {
            let db = await firebase.firestore().collection('cart').doc(id).delete();
            dispatch(fetchCart());
            return db;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

//reducers-----------------------------------------------------------
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,

    extraReducers: {
        [fetchCart.pending]: (state) => {
            state.loading = true;
        },
        [fetchCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchCart.rejected]: setError,
        [addToCart.rejected]: setError,
        [incrementCart.rejected]: setError,
        [decrementCart.rejected]: setError
    }
})

export default cartSlice.reducer;