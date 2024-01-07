import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
import http from "../../helpers/http";

const initialState: Product = {
   product: { 
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
    rating: { rate: 0, count: 0 },
    count: 0},
    id: '0',
    status: 'idle',
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id: string | undefined) => {
     const  { request } = http();
     return await request(`https://fakestoreapi.com/products/${id}`)
    }
  )

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
      builder
      .addCase(fetchProduct.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product = action.payload;
       })
      .addCase(fetchProduct.rejected, state => {
        state.status = 'error';
      })
      .addDefaultCase(() => {})
    }
  })
  
  const {actions, reducer} = productSlice;
  
  export const {} = actions;
  export default reducer;