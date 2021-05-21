import { FormEvent, useContext, useState } from 'react';
import './create-person.scss';
import { InputBox } from 'src/components';
import { PersonBuilder } from 'src/types/PersonBuilder';
import { createPerson } from 'src/api';
import { personContext } from 'src/contexts/personContext';
import { currentPersonContext } from 'src/contexts/currentPerson';

const CreatePerson = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [note, setNote] = useState('');
  const [inputError, setInputError] = useState('');
  const [fetchError, setFetchError] = useState('');

  const personGlobalContext = useContext(personContext);
  const currPerson = useContext(currentPersonContext);

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();

      const person = new PersonBuilder(firstname, phoneNumber)
        .setEmail(email)
        .setLastname(lastname)
        .setNickname(nickname)
        .setNote(note)
        .build();

      const response = await createPerson(person);
      const data = await response.json();

      if (data.message) {
        setFetchError(data.message);
        return;
      }

      currPerson?.setCurrentPerson(data.person.person_id);
      personGlobalContext?.setPerson(data.person);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  return (
    <form className="create-person-container">
      <InputBox
        isPassword={false}
        placeholder="firstname"
        item={firstname}
        setItem={setFirstname}
        testId="input-firstname"
        setError={setInputError}
      />
      <InputBox
        isPassword={false}
        placeholder="lastname"
        item={lastname}
        setItem={setLastname}
        testId="input-lastname"
        setError={setInputError}
      />
      <InputBox
        isPassword={false}
        placeholder="phone number"
        item={phoneNumber}
        setItem={setPhoneNumber}
        testId="input-phone"
        setError={setInputError}
      />
      <InputBox
        isPassword={false}
        placeholder="email"
        item={email}
        setItem={setEmail}
        testId="input-email"
        setError={setInputError}
      />
      <InputBox
        isPassword={false}
        placeholder="nickname"
        item={nickname}
        setItem={setNickname}
        testId="input-nickname"
        setError={setInputError}
      />
      <InputBox
        isPassword={false}
        placeholder="note"
        item={note}
        setItem={setNote}
        testId="input-note"
        setError={setInputError}
      />
      <button
        onClick={(event) => handleSubmit(event)}
        className="add-person-button"
        data-testid="add-person-button"
        type="submit"
      >
        Add Person
      </button>
      {inputError}
      {fetchError}
    </form>
  );
};

export default CreatePerson;
