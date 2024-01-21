import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Circles from "../util/Circles";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.querySelector('[name="name"]').value;
    const email = form.current.querySelector('[name="email"]').value;
    const formMess = document.querySelector(".form-message");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!name || !email) {
      formMess.innerHTML = "<p class='error'>Veuillez remplir tous les champs requis.</p>";
      setTimeout(() => {
        formMess.innerHTML = "";
      }, 2000);
      return;
    }

    if (!emailRegex.test(email)) {
      formMess.innerHTML = "<p class='error'>Veuillez entrer une adresse email valide.</p>";
      setTimeout(() => {
        formMess.innerHTML = "";
      }, 2000);
      return;
    }

    emailjs
      .sendForm("service_4i0myye", "template_m9v2xlc", form.current, process.env.REACT_APP_ID)
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuille réessayer</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <Circles indexSection={4} />
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <label>Name</label>
          <input type="text" name="name" required autoComplete="off" />
          <label>Email</label>
          <input type="email" name="email" required autoComplete="off" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      <div className="form-message"></div>
    </div>
  );
};

export default Contact;
