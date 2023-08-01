import React, { useRef } from "react";
import { styled } from "@mui/system";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import emailjs from "emailjs-com";
import NavBar from "./NavBar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
      <NavBar />
      <Main container spacing={2}>
        <FirstMain item xs={12}>
          <ContactN>Let's chat Tell us about your project</ContactN>
          <SecondText>Let's create something together⚡</SecondText>
          <Card>
            <Icon />
            <Grid>
              <MailText>Mail with us</MailText>
              <Typography>powertec@gmail.com</Typography>
            </Grid>
          </Card>
        </FirstMain>
        <SecondMain item xs={12}>
          <form ref={form} onSubmit={sendEmail}>
            <Input
              placeholder="Full name"
              name="user_name"
              required
              fullWidth
            />
            <Input placeholder="Email" name="user_email" required fullWidth />
            <Input placeholder="Subject" name="subject" required fullWidth />
            <Input
              multiline
              rows={5}
              placeholder="Message"
              name="message"
              required
              fullWidth
            />
            <Button variant="contained" color="success" type="submit">
              Send Message
            </Button>
          </form>
        </SecondMain>
      </Main>
    </div>
  );
};

const ContactN = styled(Typography)`
  font-size: 55px;
  text-align: justify;
`;
const SecondText = styled(Typography)`
  font-size: 35px;
  text-align: justify;
`;
const MailText = styled(Typography)`
  font-size: 15px;
  color: black;
`;
const Icon = styled(MailOutlineIcon)`
  font-size: 45px;
  text-align: justify;
  margin-right: 10px;
`;
const Card = styled(Box)`
  width: 250px;
  height: 50px;
  background-color: #c7c6c6;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: #01a4ff;
  padding: 15px;
  margin-top: 25px;
`;

const Main = styled(Grid)`
  display: flex;
  margin-top: 25px;
  margin-left: 20px;
`;
const SecondMain = styled(Grid)`
  width: 300px;
  margin-left: 750px;
  margin-right: 300px;
  margin-top: 95px;
`;

const FirstMain = styled(Grid)`
  margin-left: 95px;
  margin-top: 95px;
  position: absolute;
  width: 500px;
`;

const Input = styled(TextField)`
  margin-bottom: 15px;
`;

export default Contact;
