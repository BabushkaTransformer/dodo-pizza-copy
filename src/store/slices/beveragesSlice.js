import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';

const initialState = {
    items: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchBeverages = createAsyncThunk(
    'beveragesSlice/fetchBeverages',
    async (_, {rejectWithValue}) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('beverages').get();
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
const beveragesSlice = createSlice({
    name: 'desertsSlice',
    initialState,

    extraReducers: {
        [fetchBeverages.pending]: (state) => {
            state.loading = true;
        },
        [fetchBeverages.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchBeverages.rejected]: setError,
    }
})

export default beveragesSlice.reducer;
