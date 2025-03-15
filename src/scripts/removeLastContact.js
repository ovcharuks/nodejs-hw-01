import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactData = await readContacts();
  if (contactData.length) {
    const removeLast = contactData.slice(0, contactData.length - 1);
    writeContacts(removeLast);
  } else {
    console.log("Congratulations! You've removed all your contacts. Now what?");
  }
};

removeLastContact();
