import { Person } from 'src/types/Person';
import { PersonBuilder } from 'src/types/PersonBuilder';

describe('PersonBuilder', () => {
  it('should return new person type with given inputs', () => {
    const person = new PersonBuilder('ad', 'soyad')
      .setEmail('email@email.com')
      .setFirstname('ad degistir')
      .setLastname('soyad')
      .setNickname('nick')
      .setPersonId('2436-jl243-243jk4h')
      .setPhoneNumber('4234234234')
      .setNote('this is a note')
      .build();

    expect(person).toBeInstanceOf(Person);
  });
});
