import {configureStore} from '@reduxjs/toolkit';
import pizzaSlice from "./slices/pizzaSlice";
import snacksSlice from "./slices/snacksSlice";
import desertsSlice from "./slices/desertsSlice";
import beveragesSlice from "./slices/beveragesSlice";
import othersSlice from "./slices/othersSlice";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        pizza: pizzaSlice,
        snacks: snacksSlice,
        deserts: desertsSlice,
        beverages: beveragesSlice,
        others: othersSlice,
        modal: modalSlice,
        cart: cartSlice
    },
});
