import {useEffect, useState} from "react";
import css from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import SearchBar from "./SearchBar/SearchBar";
import ContactForm from "./ContactForm/ContactForm";
// import {nanoid} from "nanoid";
function App() {
  const [contactsData, setContactsData] = useState([
    {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
    {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
    {id: "id-3", name: "Eden Clements", number: "645-17-79"},
    {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
  ]);

  useEffect(() => {
    localStorage.setItem("contactsData", JSON.stringify(contactsData));
  }, [contactsData]);

  const handleDelete = (contactId) => {
    setContactsData((prevState) => prevState.filter((contact) => contact.id !== contactId));
  };
  const addContact = (newContact) => {
    setContactsData((initContacts) => {
      return [...initContacts, newContact];
    });
  };
  const [serch, setSerch] = useState("");

  const onSerch = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(serch.toLowerCase())
  );

  // const addNewContact = (contData) => {
  //   const finalContact = {
  //     ...contData,
  //     id: nanoid(),
  //   };
  //   setContactsData((prevState) => {
  //     [...prevState, finalContact];
  //   });
  // };
  return (
    <>
      <div className={css.containerApp}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBar value={serch} handleSerch={setSerch} />
        <ContactList contactsData={onSerch} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
