import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  const contactsData = await readContacts();
  contactsData.push(...users);

  await writeContacts(contactsData);
};

generateContacts(5);
