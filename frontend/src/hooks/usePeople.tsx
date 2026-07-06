import {
  createPerson,
  deletePerson,
  loadPeople,
} from "@/services/peopleService";
import type { Person, PersonForm } from "@/types/person";
import { useEffect, useState } from "react";

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [form, setForm] = useState<PersonForm>({
    name: "",
    age: "",
  });

  async function fetchPeople() {
    const data = await loadPeople();
    setPeople(data);
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function create() {
    setError(undefined);

    try {
      setLoading(true);

      const person = await createPerson({
        name: form.name,
        age: Number(form.age),
      });

      setPeople((prev) => [...prev, person]);

      setForm({
        name: "",
        age: "",
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function removePerson(id: number) {
    await deletePerson(id);
    await fetchPeople();
  }

  return {
    people,
    form,
    loading,
    error,
    handleChange,
    create,
    removePerson,
  };
}
