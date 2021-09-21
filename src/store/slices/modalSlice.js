import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentProduct: {},
    isOpen: false,
    isOpenAuth: false,
    isOpenConfirm: false,
    error: '',
}

//reducers-----------------------------------------------------------
const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,

    reducers: {
        openModal(state, action) {
            state.currentProduct = action.payload;
            state.isOpen = true;
        },
        closeModal(state) {
            state.currentProduct = {};
            state.isOpen = false;
        },
        openAuth(state) {
            state.isOpenAuth = true;
        },
        closeAuth(state) {
            state.isOpenAuth = false;
        },
        openConfirm(state) {
            state.isOpenConfirm = true;
        },
        closeConfirm(state) {
            state.isOpenConfirm = false;
        }
    }
})

export default modalSlice.reducer;
export const {openModal, closeModal, openAuth, closeAuth, openConfirm, closeConfirm} = modalSlice.actions;