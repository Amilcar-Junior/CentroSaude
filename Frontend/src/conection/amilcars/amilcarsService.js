import http from "../../http";

class AmilcarsService {

 getAll() {

   return http.get("/amilcars");

 }

 get(id) {

   return http.get(`/amilcars/${id}`);

 }

 create(data) {

   return http.post("/amilcars", data);

 }

 update(id, data) {

   return http.put(`/amilcars/${id}`, data);

 }

 delete(id) {

   return http.delete(`/amilcars/${id}`);

 }

}

export default new AmilcarsService();