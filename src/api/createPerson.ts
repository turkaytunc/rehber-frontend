import { BASE_URL } from 'src/costants';
import { Person } from 'src/types/Person';
export const createPerson = (person: Person) =>
  window.fetch(`${BASE_URL}/person/create`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(person),
  });
