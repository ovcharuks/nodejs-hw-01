import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  const unitedContacts = readContacts().then((data) => {
    return data.push(...users);
  });

  await writeContacts(unitedContacts);
};

generateContacts(2);
