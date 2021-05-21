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

        if (data.message) {
          console.error(data.message);
          return;
        }
        if (!data.people) {
          setPeople([]);
          return;
        }
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
          <li className="people-list-item">
            {person.firstname} {person.lastname}
          </li>
          <li className="people-list-item">{person.phone_number}</li>
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
      ))}
    </div>
  );
};

export default ListPerson;
