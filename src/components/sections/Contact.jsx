import React from "react";
import NavPoint from "../util/NavPoint";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <NavPoint />
      <div className="form-container">
        <form>
          <label>Name</label>
          <input type="text" name="name" required autoComplete="off" />
          <label>Email</label>
          <input type="email" name="email" required autoComplete="off" />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default Contact;
