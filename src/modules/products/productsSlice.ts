import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../../types/types";
import http from "../../helpers/http";

const initialState: Products = {
   products: [],
   filteredProducts: [],
   status: 'idle',
   category: 'All',
   word: ''
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (category: string) => {
     const  { request } = http();
     if (category) {
      return await request(`https://fakestoreapi.com/products/${category}`)
     } else {
      return await request('https://fakestoreapi.com/products')
     }

    }
  )

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      onFilteredProducts: (state, action) => {
        state.filteredProducts = action.payload
      },
      onUpdateSearchProducts: (state, action) => {
        state.filteredProducts = action.payload
      }
    },
    extraReducers: builder => {
      builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.filteredProducts = action.payload;
        state.products = action.payload;
       })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'error';
      })
      .addDefaultCase(() => {})
    }
  })
  
  const {actions, reducer} = productsSlice;
  
  export const {onFilteredProducts, onUpdateSearchProducts} = actions;
  export default reducer;