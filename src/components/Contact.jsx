import React, { useRef } from "react";
import { styled } from "@mui/system";
import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnc30mn",
        "template_jtdu5co",
        form.current,
        "3JYzMnYl-NyvyQqUK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Grid>
        <ContactN variant="h2">Contact Us</ContactN>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            placeholder="Full name"
            name="user_name"
            required
          ></TextField>
          <TextField placeholder="Email" name="user_email" required></TextField>
          <TextField placeholder="Subject" name="subject" required></TextField>
          <textarea name="message" cols="30" rows="30"></textarea>
          <Button variant="contained" color="success" type="submit">
            Send Message
          </Button>
        </form>
      </Grid>
    </div>
  );
};

const ContactN = styled(Typography)`
  font-size: 20px;
  position: relative;
  top: 50px;
  text-align: justify;
  left: 100px;
`;

export default Contact;
