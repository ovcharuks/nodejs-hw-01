import { faker } from '@faker-js/faker';
import { numb } from '../scripts/generateContacts.js';

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

export const users = faker.helpers.multiple(createFakeContact, {
  count: numb,
});
console.log(users);
