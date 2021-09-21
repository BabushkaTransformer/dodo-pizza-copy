import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';

const initialState = {
    items: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchSnacks = createAsyncThunk(
    'snacksSlice/fetchSnacks',
    async (_, {rejectWithValue}) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('snacks').get();
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
const snacksSlice = createSlice({
    name: 'snacksSlice',
    initialState,

    extraReducers: {
        [fetchSnacks.pending]: (state) => {
            state.loading = true;
        },
        [fetchSnacks.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchSnacks.rejected]: setError,
    }
})

export default snacksSlice.reducer;
