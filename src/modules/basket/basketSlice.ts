import { createSlice } from "@reduxjs/toolkit";
import { BasketProducts } from "../../types/types";

const initialState: BasketProducts = {
  basketArr: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getBasketProduct: (state, action) => {
      state.basketArr = [...state.basketArr, action.payload]
    },

    clearBasketArr: (state, action) => {
      state.basketArr = action.payload
    },

    updateCountProduct: (state, action) => {
        state.basketArr = action.payload;
    },

    deleteProduct: (state, action) => {
      state.basketArr = state.basketArr.filter((item) => item.id !== action.payload);
    },
  }
})

const {actions, reducer} = basketSlice;

export const { getBasketProduct, deleteProduct, updateCountProduct, clearBasketArr } = actions;
export default reducer;