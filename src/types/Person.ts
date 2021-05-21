export class Person {
  person_id = '';
  firstname: string;
  lastname = '';
  nickname = '';
  email = '';
  phone_number: string;
  note = '';

  constructor(firstname: string, phone_number: string) {
    this.firstname = firstname;
    this.phone_number = phone_number;
  }
}
