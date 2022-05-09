import {createAction, createReducer, PayloadAction} from "@reduxjs/toolkit";

interface IState {
  favourite: string[],
  cart: string[]
}

const initialState: IState = {
  favourite: JSON.parse(localStorage.getItem('favourite') || '[]'),
  cart: []
}

export const addFavourite = createAction<string | number>('ADD_FAVOURITE');
export const removeFavourite = createAction<string | number>('REMOVE_FAVOURITE');
export const addToCart = createAction<string | number>('ADD_TO_CART');
export const removeFromCart = createAction<string | number>('REMOVE_FROM_CART');

export default createReducer(initialState, {
  [addFavourite.type]: (state, action: PayloadAction<string | number>) => {
    state.favourite.push(action.payload.toString());
  },
  [removeFavourite.type]: (state, action: PayloadAction<string | number>) => {
    const index = state.favourite.findIndex(id => id === action.payload)
    state.favourite.splice(index, 1);
  },
  [addToCart.type]: (state, action: PayloadAction<string | number>) => {
    state.cart.push(action.payload.toString())
  },
  [removeFromCart.type]: (state, action: PayloadAction<string | number>) => {
    const index = state.cart.findIndex(id => id === action.payload)
    state.cart.splice(index, 1)
  },
})