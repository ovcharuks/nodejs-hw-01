import { newContacts, writeContacts } from '../utils/writeContacts';

export let count;
const generateContacts = async (number) => {
  count = number;
  writeContacts(newContacts);
};

generateContacts(5);
