import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";
import emailjs from 'emailjs-com';
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#000",
    height: "100vh",
  },
  heading: {
    color: "#FF004D",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
    padding: "1rem 0",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
  //  marginTop: "1rem",
    color: "#FF004D",
    borderColor: "white",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FF004D",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "white",
      },
    },
  },
})(TextField);


function sendEmail(e) {

  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  emailjs.sendForm('service_7mh137t', 'template_m7lqwhr', e.target, 'user_IZwXAzgHvPEtb4ZG8RxkX')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
    }, (error) => {
        console.log(error.text);
    });
}

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
       <Typography variant="h4" align="center" className={classes.heading}>
       Hire or Contact me...
      </Typography>
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <InputField
            fullWidth={true}
            label=" Name"
            name="from_name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            name="from_email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <InputField
            type="submit"
            variant="outlined"
            fullWidth={true}
            inputProps={
             { className: classes.button}
            }

            value="Send Message"
          />

        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
