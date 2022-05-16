import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === "contactName") {
      setContactName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thank you ${contactName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setContactName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };
  return (
    <div>
      <form className="form">
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
          <div>
              <p className="error-text">{errorMessage}</p>
          </div>    
      )}
    </div>
  );
}
