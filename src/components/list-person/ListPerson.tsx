import { useContext, useEffect, useState } from 'react';
import { fetchPeople } from 'src/api';
import { personContext } from 'src/contexts/personContext';
import { Person } from 'src/types/Person';
import './list-person.scss';

const ListPerson = () => {
  const [people, setPeople] = useState([] as Person[]);
  const personCon = useContext(personContext);

  useEffect(() => {
    const fillPeople = async () => {
      try {
        const response = await fetchPeople();
        const data = await response.json();

        setPeople(data.people);
      } catch (error) {
        console.error(error.message);
      }
    };

    fillPeople();
  }, [personCon?.person]);

  return (
    <div className="people-container">
      {people.map((person) => (
        <ul className="people-list" key={person.person_id}>
          <li className="people-list-item">{person.firstname}</li>
          <li className="people-list-item">{person.lastname}</li>
          <li className="people-list-item">{person.phone_number}</li>
          <li className="people-list-item">{person.nickname}</li>
          <li className="people-list-item">{person.email}</li>
          <li className="people-list-item">{person.note}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListPerson;
