import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';

const initialState = {
    items: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchDeserts = createAsyncThunk(
    'desertsSlice/fetchDeserts',
    async (_, {rejectWithValue}) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('deserts').get();
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
const desertsSlice = createSlice({
    name: 'desertsSlice',
    initialState,

    extraReducers: {
        [fetchDeserts.pending]: (state) => {
            state.loading = true;
        },
        [fetchDeserts.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchDeserts.rejected]: setError,
    }
})

export default desertsSlice.reducer;
