import { PATH_DB } from '../contacts/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (users) => {
  await fs.writeFile(PATH_DB, JSON.stringify(users, null, 2));
};
