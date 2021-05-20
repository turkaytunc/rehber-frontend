import { useState } from 'react';
import './create-person.scss';
import InputBox from '../input-box/InputBox';

const CreatePerson = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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

      {inputError}
    </div>
  );
};

export default CreatePerson;
