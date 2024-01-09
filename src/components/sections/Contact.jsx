import { default as React, forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" id="contact">
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
});

export default Contact;
