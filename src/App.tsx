import { useState } from 'react';
import './app.scss';
import { CreatePerson, ListPerson } from './components';

function App() {
  const [isShowCreate, setIsShowCreate] = useState(false);

  return (
    <div className="app-container">
      <div className="create-button-container">
        <button className="create-person-button" type="button" onClick={() => setIsShowCreate((prev) => !prev)}>
          Create Person
        </button>
      </div>
      {isShowCreate && <CreatePerson />}
      <div>
        <ListPerson />
      </div>
    </div>
  );
}

export default App;
