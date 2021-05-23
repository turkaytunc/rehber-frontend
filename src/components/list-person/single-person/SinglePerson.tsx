import { useState } from 'react';
import { deletePerson } from 'src/api';
import { DisplayError } from 'src/components';
import { Person } from 'src/types/Person';
import './single-person.scss';

const SinglePerson = ({ person }: { person: Person }) => {
  const [fetchError, setFetchError] = useState('');

  const handleDelete = async (personId: string) => {
    try {
      await deletePerson(personId);

      window.location.href = '/';
    } catch (error) {
      setFetchError(error.message);
    }
  };
  return (
    <ul className="people-list">
      <button onClick={() => handleDelete(person.person_id)} type="button" className="delete-button">
        &times;
      </button>
      <li className="people-list-item">
        <span className="list-item-span">Name</span> {person.firstname} {person.lastname}
      </li>
      <li className="people-list-item">
        <span className="list-item-span">Phone</span> {person.phone_number}
      </li>
      <li className="people-list-item">
        <span className="list-item-span">Nickname</span> {person.nickname}
      </li>
      <li className="people-list-item">
        <span className="list-item-span">Email</span> {person.email}
      </li>
      <li className="people-list-item">
        <span className="list-item-span">Notes</span> {person.note}
      </li>
      <DisplayError message={fetchError} color="red" />
    </ul>
  );
};

export default SinglePerson;
