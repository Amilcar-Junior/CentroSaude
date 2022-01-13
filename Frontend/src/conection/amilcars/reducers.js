import {

    CREATE_AMILCAR,
   
    RETRIEVE_AMILCARS,
   
    UPDATE_AMILCAR,
   
    DELETE_AMILCAR,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function amilcarReducer(amilcars = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_AMILCAR:
   
        return [...amilcars, payload];
   
      case RETRIEVE_AMILCARS:
   
        return payload;
   
      case UPDATE_AMILCAR:
   
        return amilcars.map((amilcar) => {
   
          if (amilcar.id === payload.id) {
   
            return {
   
              ...amilcar,
   
              ...payload,
   
            };
   
          } else {
   
            return amilcar;
   
          }
   
        });
   
      case DELETE_AMILCAR:
   
        return amilcars.filter(({ id }) => id !== payload.id);
   
      default:
   
        return amilcars;
   
    }
   
   }
   
   export default amilcarReducer;