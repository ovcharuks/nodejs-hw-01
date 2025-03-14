import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (users) => {
  await fs.writeFile(PATH_DB, JSON.stringify(users, null, 2));
  console.log(users.length);
};
// const newContacts = readContacts().then((cont) => {
//   cont.push(...users);
//  });

// writeContacts().then((data) => console.log(data));
