import { deletePerson } from 'src/api';
import { Person } from 'src/types/Person';
import './single-person.scss';

const SinglePerson = ({ person }: { person: Person }) => {
  const handleDelete = async (personId: string) => {
    try {
      const response = await deletePerson(personId);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ul className="people-list" key={person.person_id}>
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
    </ul>
  );
};

export default SinglePerson;
