import { configureStore } from "@reduxjs/toolkit";


import testeReducer from "./conection/testes/reducers";

export default configureStore({

 reducer: {

   testes: testeReducer,
   

 },

});

