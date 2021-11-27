import { configureStore } from "@reduxjs/toolkit";
import backdropReducer from "./reducers/backdrop";
import modalReducer from "./reducers/modal";

export default configureStore({
  reducer: {
    backdrop: backdropReducer,
    modal: modalReducer,
  },
});
