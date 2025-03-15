import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contactsData = await readContacts();
  return contactsData.length;
};

console.log(await countContacts());
