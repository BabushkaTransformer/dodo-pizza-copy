import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import firebase from '../../firebase';
import {signInWithPhoneNumber, getAuth, signOut} from "firebase/auth";
import {closeAuth, closeConfirm, openConfirm} from "./modalSlice";

const auth = getAuth();
auth.languageCode = 'it';


const initialState = {
    user: [],
    loading: false,
    error: '',
    isAuth: false,
}


//async actions---------------------------------------------------------------------
export const signIn = createAsyncThunk(
    'authSlice/signIn',
    async (value, {dispatch, rejectWithValue}) => {
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, value, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                dispatch(closeAuth());
                dispatch(openConfirm());
            }).catch((error) => {
            console.log(error)
        });
    }
)

export const phoneConfirm = createAsyncThunk(
    'authSlice/signIn',
    async (confirm, {dispatch, rejectWithValue}) => {
        window.confirmationResult.confirm(confirm).then(result => {
            const user = result.user;
            localStorage.setItem('token', user.access);
            dispatch(closeConfirm());
        }).catch(error => console.log(error));
    }
)

export const signOutHandler = createAsyncThunk(
    'authSlice/signIn',
    async (confirm, {dispatch, rejectWithValue}) => {
        signOut(auth).then(result => {
            localStorage.removeItem('token');
        }).catch(error => console.log(error));
    }
)



const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
//reducers-----------------------------------------------------------
const authSlice = createSlice({
    name: 'authSlice',
    initialState,

    extraReducers: {
        [signIn.pending]: (state) => {
            state.loading = true;
        },
        [signIn.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [signIn.rejected]: setError,
    }
})

export default authSlice.reducer;
