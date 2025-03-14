import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (users) => {
  const newContacts = readContacts().then((contacts) => {
    contacts.push(...users);
  });
  await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
  console.log(newContacts.length);
};
// const newContacts = readContacts().then((cont) => {
//   cont.push(...users);
//  });

// writeContacts().then((data) => console.log(data));
