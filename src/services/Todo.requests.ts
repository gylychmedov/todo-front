import { API } from "./API";

export async function getTodos() {
  return API.get("todo/all");
}

export async function deleteTodo(id: number) {
  return API.post(`todo/delete/${id}`);
}
