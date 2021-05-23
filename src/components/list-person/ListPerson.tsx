import { useContext, useEffect, useState } from 'react';
import { fetchPeople } from 'src/api';
import { personContext } from 'src/contexts/personContext';
import { Person } from 'src/types/Person';
import './list-person.scss';
import SinglePerson from './single-person/SinglePerson';

const ListPerson = () => {
  const [people, setPeople] = useState([] as Person[]);
  const [err, setErr] = useState('');
  const personCon = useContext(personContext);

  useEffect(() => {
    const fillPeople = async () => {
      try {
        const response = await fetchPeople();
        const data = await response.json();

        if (data.message) {
          setErr(data.message);
          return;
        }

        setPeople(data.people);
      } catch (error) {
        setErr(error.message);
      }
    };

    fillPeople();
  }, [personCon?.person]);

  return (
    <div className="people-container">
      {people.map((person) => (
        <SinglePerson key={person.person_id} person={person} />
      ))}
      {err}
    </div>
  );
};

export default ListPerson;
