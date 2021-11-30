import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    //payload can be used to pass a value when calling the action

    searchCharacter: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchCharacter } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;
