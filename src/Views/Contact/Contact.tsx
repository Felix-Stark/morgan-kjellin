import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import makeStyles from "@mui/material/styles/makeStyles";
import "./Contact.css";
export const Contact = () => {
  function submitHandler() {}

  return (
    <div className="contact-form-container">
      <Box
        sx={{
          width: 400,
          height: 666,
          backgroundColor: "primary.main",
          borderRadius: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          color="text.primary"
          sx={{
            padding: 2,
          }}
        >
          Vad kul att du vill nå ut till mig!
        </Typography>

        <Typography
          variant="h3"
          color="text.primary"
          sx={{
            padding: 2,
          }}
        >
          Vänligen fyll i de obligatoriska fälten så svarar jag inom två
          arbetsdagar
        </Typography>
      </Box>

      <Box
        sx={{
          width: 600,
          height: 666,
          backgroundColor: "secondary.main",
          borderRadius: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={submitHandler} className="contact-form">
          <section className="sender-information-container">
            <label htmlFor="name">Namn</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="">E-post *</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="phone">Telefonnummer</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="reason-for-contact">Anledning för kontakt *</label>
            <select
              name="reason-for-contact"
              id=""
              // value={reasonForContact}
              // onChange={(e) => setReasonForContact(e.target.value)}
            >
              <option value="jobb">Jobb</option>
              <option value="hej">Hej</option>
              <option value="annat">Annat</option>
            </select>
          </section>
          <section className="message-container">
            <textarea name="message" placeholder="Hej Morgan!"></textarea>
          </section>
          <section>
            {" "}
            <Button></Button>
          </section>
        </form>
      </Box>
    </div>
  );
};
