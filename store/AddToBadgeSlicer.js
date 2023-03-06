import { createSlice } from "@reduxjs/toolkit";

export const addToBadgeSlicer = createSlice({
  name: "badges",
  initialState: { badgeList: [] },
  reducers: {
    addBadge: (state, action) => {
      state.badgeList.push({
        code: action.payload.code,
        price: action.payload.price,
      });
    },
    deleteBadge: (state, action) => {
      state.badgeList = state.badgeList.filter(
        (item) => item.code !== action.payload
      );
    },
  },
});

export const { addBadge, deleteBadge } = addToBadgeSlicer.actions;
export const allBadges = (state) => state.badge.badgeList;

export default addToBadgeSlicer.reducer;
