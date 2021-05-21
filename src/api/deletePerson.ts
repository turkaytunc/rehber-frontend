import { BASE_URL } from 'src/costants';
export const deletePerson = (personId: string) =>
  window.fetch(`${BASE_URL}/person/delete/${personId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
