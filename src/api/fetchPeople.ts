import { BASE_URL } from 'src/costants';

export const fetchPeople = () => window.fetch(`${BASE_URL}/person/all`);
