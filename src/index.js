import { readContacts } from './utils/readContacts';

readContacts().then(console.log).catch(console.error);
