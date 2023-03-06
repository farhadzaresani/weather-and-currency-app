import { configureStore } from "@reduxjs/toolkit";
import addToBadgeSlicer from "./AddToBadgeSlicer";

export const store = configureStore({
  reducer: {
    badge: addToBadgeSlicer,
  },
});
