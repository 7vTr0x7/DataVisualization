import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {},
  },
  reducers: {
    changeFilters: (state, action) => {
      const { startDate, endDate, ...rest } = action.payload;

      const serializedFilters = {
        ...rest,
        startDate: startDate ? new Date(startDate).getTime() : null,
        endDate: endDate ? new Date(endDate).getTime() : null,
      };

      return {
        ...state,
        filters: serializedFilters,
      };
    },
    resetFilters: (state, action) => {
      return {
        ...state,
        filters: {},
      };
    },
  },
});

export const { changeFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
