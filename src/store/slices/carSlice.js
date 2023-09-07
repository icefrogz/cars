import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        //assumption :
        //action.payload ===(name:'ab', cost:140)
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid,
      });
    },
    removeCar(state, action) {
      //assumption
      //action.payload == id the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;

export const carReducer = carSlice.reducer;
