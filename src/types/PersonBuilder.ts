import { Person } from './Person';

export class PersonBuilder {
  person: Person;
  constructor(firstname: string, phone_number: string) {
    this.person = new Person(firstname, phone_number);
  }

  setPersonId(personId: string): PersonBuilder {
    this.person.person_id = personId;
    return this;
  }

  setFirstname(firstname: string): PersonBuilder {
    this.person.firstname = firstname;
    return this;
  }

  setLastname(lastname: string): PersonBuilder {
    this.person.lastname = lastname;
    return this;
  }

  setNickname(nickname: string): PersonBuilder {
    this.person.nickname = nickname;
    return this;
  }

  setEmail(email: string): PersonBuilder {
    this.person.email = email;
    return this;
  }

  setPhoneNumber(phone_number: string): PersonBuilder {
    this.person.phone_number = phone_number;
    return this;
  }

  setNote(note: string): PersonBuilder {
    this.person.note = note;
    return this;
  }

  build(): Person {
    return this.person;
  }
}
