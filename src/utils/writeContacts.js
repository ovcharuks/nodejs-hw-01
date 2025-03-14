import { PATH_DB } from '../constants/contacts.js';
import { users } from './createFakeContact.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};
export const newContacts = readContacts().then((cont) => {
  cont.push(...users);
  // writeContacts(cont);
});
console.log(newContacts.length);
