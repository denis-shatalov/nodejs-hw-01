import { createFakeContact } from "../utils/createFakeContact.js";
import {readContacts} from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const addOneContact = async (number) => {
    try {
        const contacts = await readContacts();
        const newContacts = createFakeContact();
        const updateContacts = [...contacts, newContacts];

        await writeContacts(updateContacts);

    } catch (error) {
        console.log(error);
    }
 };

addOneContact();
