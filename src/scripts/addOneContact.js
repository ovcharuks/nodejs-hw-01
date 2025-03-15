import { faker } from '@faker-js/faker';
import { generateContacts } from './generateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  const contactsData = await readContacts();
  console.log(users);
  contactsData.push(...users);
  await writeContacts(contactsData);
};

addOneContact(1);
