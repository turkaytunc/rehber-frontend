import { Person } from 'src/types/Person';
import { PersonBuilder } from 'src/types/PersonBuilder';

describe('PersonBuilder', () => {
  it('should return new person type with given inputs', () => {
    const person = new PersonBuilder('name', 'surname')
      .setEmail('email@email.com')
      .setFirstname('new name')
      .setLastname('lastname')
      .setNickname('nick')
      .setPersonId('2436-jl243-243jk4h')
      .setPhoneNumber('4234234234')
      .setNote('this is a note')
      .build();

    expect(person).toBeInstanceOf(Person);
  });
});
