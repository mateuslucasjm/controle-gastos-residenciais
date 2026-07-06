import api from "@/services/api";
import type { Person, PersonCreate } from "@/types/person";

export async function loadPeople(): Promise<Person[]> {
  const response = await api.get<Person[]>("/people");
  return response.data;
}

export async function createPerson(data: PersonCreate) {
  const response = await api.post("/people", data);
  return response.data;
}

export async function deletePerson(id: number) {
  return api.delete(`/people/${id}`);
}
