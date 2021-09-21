import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';

const initialState = {
    items: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchOthers = createAsyncThunk(
    'othersSlice/fetchOthers',
    async (_, {rejectWithValue}) => {
        let firebaseData = [];
        try {
            let db = await firebase.firestore().collection('others').get();
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
const othersSlice = createSlice({
    name: 'othersSlice',
    initialState,

    extraReducers: {
        [fetchOthers.pending]: (state) => {
            state.loading = true;
        },
        [fetchOthers.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchOthers.rejected]: setError,
    }
})

export default othersSlice.reducer;
