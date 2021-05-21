import { useContext, useEffect, useState } from 'react';
import { fetchPeople } from 'src/api';
import { personContext } from 'src/contexts/personContext';
import { Person } from 'src/types/Person';
import './list-person.scss';
import SinglePerson from './single-person/SinglePerson';

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
        <SinglePerson person={person} />
      ))}
    </div>
  );
};

export default ListPerson;
