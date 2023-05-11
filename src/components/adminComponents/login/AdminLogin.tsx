import { auth, db } from "../../../../firebase/firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import { useState } from "react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setPassword(e.target.value);
    };

    const handleSignIn = async () => {
      await signInWithEmailAndPassword(auth, email, password);
    };

  return (
    <Grid
      item
      maxHeight={"20rem"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={5}
      style={{ backgroundColor: "#342C39", padding: '2rem' }}
    >
      <TextField
        label="Email"
        variant="filled"
        type="email"
        onChange={handleEmailChange}
        value={email}
        sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        onChange={handlePasswordChange}
        value={password}
        sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
      />
      <Button style={{ backgroundColor: "#BA1D37" }} onClick={handleSignIn}>
        Logga in
      </Button>
    </Grid>
  );
}

export default AdminLogin