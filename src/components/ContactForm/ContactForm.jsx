// import {useState} from "react";
import {nanoid} from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({addContact}) {
  // const [addValues, setAddValues] = useState({
  //   userName: "",
  //   phone: "",
  // });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.text.value;
    const number = e.target.elements.number.value;
    addContact({
      id: nanoid(),
      name: name,
      number: number,
    });

    e.target.reset();
    // setAddValues({
    //   userName: "",
    //   phone: "",
    // });
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <label className={css.lable}>
        Name
        <span className={css.text}></span>
        <input
          className={css.input}
          id="name"
          type="text"
          name="text"
          placeholder="User name"
          // onChange={handleChange}
          required
        />
      </label>
      <label className={css.lable}>
        Number
        <span className={css.text}></span>
        <input
          className={css.input}
          id="number"
          type="number"
          name="number"
          placeholder="Phone number +380"
          // onChange={handleChange}
          required
        />
      </label>
      <button
        className={css.btnSubmit}
        type="submit"
        aria-label="add new contact"
        title="click if  you want to add a new contact"
      >
        Add new contact
      </button>
    </form>
  );
}
