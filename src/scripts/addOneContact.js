import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  const contactsData = await readContacts();
  contactsData.push(...users);
  await writeContacts(contactsData);
};

addOneContact(1);
