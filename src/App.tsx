import { useContext, useEffect } from 'react';
import './app.scss';
import { CreatePerson } from './components';
import { personContext } from './contexts/personContext';
import { PersonBuilder } from './types/PersonBuilder';

function App() {
  const context = useContext(personContext);

  useEffect(() => {
    const newPerson = new PersonBuilder('hasan', '423423423').build();
    context?.setPerson(newPerson);
  }, []);

  return (
    <div className="app-container">
      <CreatePerson />
    </div>
  );
}

export default App;
