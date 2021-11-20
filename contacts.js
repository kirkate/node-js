
const fs = require ('fs');
const path =  require('path');
const contactsPath = path.resolve('./db/contacts.json'); 


const writeFile = (item) => {
    fs.writeFile(contactsPath, JSON.stringify(item), (err) => {
            if (err) {
               throw err;
            }
          });
}
const listContacts = () => {
  fs.readFile(contactsPath, 'utf8',  (err, data) => {
    if (err) {
      throw err;
    } else {
       console.table(JSON.parse(data));
    }
  })
  }
  
  const getContactById = (contactId) => {
    fs.readFile(contactsPath , 'utf8' ,   (err, content) =>  {
        if (err) {
          throw err;
          } else {
            console.table(JSON.parse(content).find((item) => item.id === contactId))
          }
        });
        }

  
  const  removeContact= (contactId) => {
    fs.readFile(contactsPath, 'utf-8',  (err, content) => {
        if (err) {
          throw err;
        } else {
          const contacts = JSON.parse(content);
          const newContact = contacts.filter((item) => item.id !== contactId);
          writeFile(newContact);
          console.table(contacts);
        }
      })
    }
  
  const addContact = (name, email, phone) => {
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if (err) {
            throw err;
          }  
          const contacts = JSON.parse(data);
          contacts.push({
           id: contacts.length - 1,
           name: name, 
           email : email, 
           phone: phone });

           console.table(contacts);
           writeFile(contacts)
       
   })
}
  

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  };