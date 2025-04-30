import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => { 
    try {
        const deleteAll = [];
        await writeContacts(deleteAll);
    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
