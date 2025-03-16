import { PATH_DB } from '../contacts/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, {
    encoding: 'utf-8',
  });
  console.log(data);
  return JSON.parse(data);
};

readContacts();
