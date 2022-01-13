import { configureStore } from "@reduxjs/toolkit";
import amilcarReducer from "./conection/amilcars/reducers";

import testeReducer from "./conection/testes/reducers";

export default configureStore({

 reducer: {

   testes: testeReducer,
   amilcars: amilcarReducer,

 },

});