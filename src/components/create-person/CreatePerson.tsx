import { useState } from 'react';
import './create-person.scss';
import { InputBox } from 'src/components';

const CreatePerson = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [note, setNote] = useState('');
  const [inputError, setInputError] = useState('');

  return (
    <div className="create-person-container">
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

      {inputError}
    </div>
  );
};

export default CreatePerson;
