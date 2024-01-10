import { createSlice, current } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    restaurantData: [],
    singleRestaurantDetails: [],
    cartItem: [],
  },
  reducers: {    
    addRestaurantData: (state, action) => {
      state.restaurantData.push(action.payload);
    },
    addSingleRestaurantDetails: (state, action) => {
      state.singleRestaurantDetails = action.payload;
    },
    addToCart(state, action) {
      console.log(action.payload.card.info.id);
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem?.card?.info?.id === action.payload.card?.info?.id
      );
      console.log(existingItem);
      if (existingItem) {
        console.log(true);
        const updateItemQuantity = state.cartItem.map((product) =>
          product?.card?.info?.id === action.payload.card?.info?.id
            ? { ...product, itemQuantity: product.itemQuantity + 1 }
            : product
        );
        state.cartItem = updateItemQuantity;
      } else {
        state.cartItem.push({ ...action.payload, itemQuantity: 1 });
      }
    },
    increaseItem(state, action) {
      const existingItem = state.cartItem.find(
        (item) => item?.card?.info?.id === action.payload
      );
      if (existingItem) {
        existingItem.itemQuantity += 1;
      }
    },
    decreaseItem(state, action) {
      const existingItem = state.cartItem.find(
        (item) => item?.card?.info?.id === action.payload
      );
      if (existingItem) {
        existingItem.itemQuantity -= 1;
        if (existingItem.itemQuantity === 0) {
          state.cartItem = state.cartItem.filter(
            (item) => item?.card?.info?.id !== action.payload
          );
        }
      }
    },
    removeItemFromCart(state, action) {
      state.cartItem = [];
    },
  },
});

export const {
  addRestaurantData,
  addSingleRestaurantDetails,
  addToCart,
  increaseItem,
  decreaseItem,
  removeItemFromCart,
} = dataSlice.actions;

export default dataSlice.reducer;
