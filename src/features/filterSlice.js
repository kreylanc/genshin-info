import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weapon: "",
  vision: "",
  rarity: "",
};

export const filterSlice = createSlice({
  name: "filter", //name of the slice
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    //payload can be used to pass a value when calling the action
    weaponFilter: (state, action) => {
      state.weapon = action.payload;
    },
    visionFilter: (state, action) => {
      state.vision = action.payload;
    },

    rarityFilter: (state, action) => {
      state.rarity = action.payload;
    },
  },
});

export const { weaponFilter, visionFilter, rarityFilter } = filterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWeapon = (state) => state.filter.weapon;

export const selectVision = (state) => state.filter.vision;
export const selectRarity = (state) => state.filter.rarity;

export default filterSlice.reducer;
