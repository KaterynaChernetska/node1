const yargs = require("yargs");
const contacts = require("./contacts");
// const { program } = require("commander");
const {hideBin} = require("yargs/helpers");


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
    case "add":
      const addedContacts = await contacts.addContact(name, email, phone);
      return console.log(addedContacts);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
  }
};

// invokeAction({action: "read"});
// invokeAction({ action: "get", id: "e6ywwRe4jXfCZOj_1e" });
// invokeAction({ action: "add", name: "Mark", email: "dddd@gmail.com", phone: "+2345887763" });
// invokeAction({ action: "remove", id: "7WHEdlEQZzK6FuNT_KlSV" });

// console.log(process.argv)
// const actionIndex = process.argv.indexOf('--action');
// if(actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     console.log(action)
//     invokeAction({action})
// }
const arr = hideBin(process.argv);
// console.log(arr)
const {argv} = yargs(arr);
invokeAction(argv)