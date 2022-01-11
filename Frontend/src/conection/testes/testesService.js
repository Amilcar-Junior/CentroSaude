import http from "../../http";

class TestesService{

 getAll() {

   return http.get("/api/testes");

 }

 get(id) {

   return http.get(`/api/testes/${id}`);

 }

 create(data) {

   return http.post("/api/testes", data);

 }

 update(id, data) {

   return http.put(`/api/testes/${id}`, data);

 }

 delete(id) {

   return http.delete(`/api/testes/${id}`);

 }

}

export default new TestesService();