import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';

const initialState = {
    items: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchPizza = createAsyncThunk(
    'pizzaSlice/fetchPizza',
    async (_, {rejectWithValue}) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('pizza').get();
            db.forEach(response => firebaseData.push({id: response.id, ...response.data()}))
            return firebaseData;
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
const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState,

    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.loading = true;
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchPizza.rejected]: setError,
    }
})

export default pizzaSlice.reducer;
// export const {removePokemon, togglePokemon} = pizzaSlice.actions;