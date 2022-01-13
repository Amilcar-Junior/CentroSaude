import {

    CREATE_AMILCAR,
   
    RETRIEVE_AMILCARS,
   
    UPDATE_AMILCAR,
   
    DELETE_AMILCAR,
   
   } from "./actionTypes";
   
   import AmilcarsService from "./amilcarsService";
   
   export const createAmilcar =
   
    (nome, email, data,) => async (dispatch) => {
   
      try {
   
        const res = await AmilcarsService.create({
   
            nome, email, data,
   
        });
   
        dispatch({
   
          type: CREATE_AMILCAR,
   
          payload: res.data,
   
        });
   
        return Promise.resolve(res.data);
   
      } catch (err) {
   
        
        return Promise.reject(err);
   
      }
   
    };
   
   export const retrieveAmilcars = () => async (dispatch) => {
   
    try {
   
      const res = await AmilcarsService.getAll();
   
      dispatch({
   
        type: RETRIEVE_AMILCARS,
   
        payload: res.data,
   
      });
   
    } catch (err) {
   
      console.log(err);
   
    }
   
   };
   
   export const updateAmilcar = (id, data) => async (dispatch) => {
   
    try {
   
      const res = await AmilcarsService.update(id, data);
   
      dispatch({
   
        type: UPDATE_AMILCAR,
   
        payload: data,
   
      });
   
      return Promise.resolve(res.data);
   
    } catch (err) {
   
      return Promise.reject(err);
   
    }
   
   };
   
   export const deleteAmilcar = (id) => async (dispatch) => {
   
    try {
   
      await AmilcarsService.delete(id);
   
      dispatch({
   
        type: DELETE_AMILCAR,
   
        payload: { id },
   
      });
   
    } catch (err) {
   
      console.log(err);
   
    }
   
   };