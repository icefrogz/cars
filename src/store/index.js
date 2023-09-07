import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";
import { formReducers, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {},
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
