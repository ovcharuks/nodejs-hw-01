import { newContacts, writeContacts } from '../utils/writeContacts.js';

export let numb;
const generateContacts = async (number) => {
  numb = number;
  await writeContacts(newContacts);
};

generateContacts(7);
