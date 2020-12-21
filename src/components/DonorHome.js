import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FcHome } from "react-icons/fc";
import { BiDonateHeart } from "react-icons/bi"

const useStyles = makeStyles((theme) => ({
  form: {
    background: "#C0EDF2",
    color: "#222222",
    position: "relative",
    borderRadius: 28,
    height: 36,
    border: "solid 8px white",
    padding: "0 30px",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    whiteSpace: "nowrap",
    margin: theme.spacing(1),
  },

  p: {
    textAlign: "right",
    margin: 50,
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  countinueButton: {
    paddingTop:110,
    textAlign: "center",
  },
}));

export default function DonorHome() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  function submitForm() {
    history.push("/donor/all-orders");
  }

  function submit() {
    console.log([{ name: name, phone: phone }]);
    if (name && phone) {
      return submitForm();
    } else {
      alert("יש למלא את כל הפרטים");
    }
  }

  return (
    <div>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        כניסת מתנדבים
        <BiDonateHeart />
      </Box>
      <p className={classes.p}>
        כדי להכנס לאפליקציה צריך להכניס שם וטלפון
      </p>
      <br />

      <Form  noValidate autoComplete="off">
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="שם" className={classes.form} value={name}
          onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Control
            type="phone"
            placeholder="מספר טלפון"
            className={classes.form}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit}
        >
          המשך
        </Button>
   
      </Box>
      <br />
      <Box style={{textAlign: "center"}}>
      <a href="www.google.com">לאתר העמותה</a>
      </Box>
    </div>
  );
}