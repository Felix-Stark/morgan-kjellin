import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  TextareaAutosize,
  Typography,
  useMediaQuery,
  Dialog, DialogTitle, DialogActions
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "emailjs-com";

const reasons = ["Boka föreläsning", "Boka möte", "Samarbete", "Annat"];

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  reason: string;
  message: string;
}




export const Contact = () => {
  const [ open, setOpen ] = useState<boolean>(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const width = useMediaQuery("(max-width:600px)") ? "xs" : "md";
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_auwdql8",
        "template_17rbltb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          reason: formData.reason,
          message: formData.message,
        },
        "hbA17LMwp8EWGpDL2"
      )
      .then(
        (result) => {
          console.log(result.text);
          if( result.text == 'OK') {
            setOpen(true);
            clearForm();
          }
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
  };

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      reason: "",
      message: "",
    });
  }

  const theme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            backgroundColor: "white", // Desired input background color
            "&:hover": {
              backgroundColor: "white", // Desired input background color when hovered
            },
            "&.Mui-focused": {
              backgroundColor: "white", // Desired input background color when focused
            },
            "&.Mui-error": {
              backgroundColor: "white", // Desired input background color when error occurs
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "white", // Desired input background color
            "&:hover": {
              backgroundColor: "white", // Desired input background color when hovered
            },
            "&.Mui-focused": {
              backgroundColor: "white", // Desired input background color when focused
            },
            "&.Mui-error": {
              backgroundColor: "white", // Desired input background color when error occurs
            },
          },
        },
      },
    },
  });

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box display="flex" alignItems="center" sx={{ minHeight: "90vh" }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        sx={{
          width: "100%",
          height: "700px",
          maxWidth: "1100px",
          margin: "0 auto",
          borderRadius: "4px",
          marginTop: { xs: "1rem", md: "0" },
          marginBottom: { xs: "18rem", md: "0" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            height: "700px",
            maxWidth: "1100px",
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: width === "xs" ? 0 : 4,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            padding: { xs: "16px", md: "32px" },
            width: { xs: "90%", md: "40%" },
          }}
        >
          <Typography variant="h2" sx={{ padding: { xs: "12px", md: "24px" } }}>
            Vad kul att du vill nå ut till mig!
          </Typography>

          <Typography variant="h3" sx={{ padding: { xs: "12px", md: "24px" } }}>
            Vänligen fyll i de obligatoriska fälten så svarar jag inom två arbetsdagar
          </Typography>
        </Box>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            sx={{
              height: { xs: "100%", sm: "100%", md: "700px" },
              maxWidth: "1100px",
              margin: "0 auto",
              borderRadius: width === "xs" ? 0 : {
                xs: 0,
                md: "0 1rem 1rem 0",
                lg: "0 1rem 1rem 0",
                xl: "0 1rem 1rem 0",
              },
              width: { xs: "90%", md: "80%" },
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                borderRadius: width === "xs" ? 0 : {
                  xs: 0,
                  md: "0 1rem 1rem 0",
                  lg: "0 1rem 1rem 0",
                  xl: "0 1rem 1rem 0",
                },
                overflow: "hidden",
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{ height: "80%" }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: "rgba(52, 52, 52)",
                    padding: 4,
                  }}
                  flexGrow={1}
                >
                  <TextField
                    name="name"
                    autoComplete="name"
                    label="Namn"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                  />
                  <TextField
                    name="email"
                    label="E-post"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                  />
                  <TextField
                    name="phoneNumber"
                    label="Telefon"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                  />
                  <TextField
                    name="reason"
                    variant="filled"
                    select
                    label="Anledning för kontakt"
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: "rgba(0,0,0,0.10)", color: "white" }}
                  >
                    {reasons.map((reason) => (
                      <MenuItem key={reason} value={reason}>
                        {reason}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  flexGrow={1}
                  mt={{ xs: 0, md: 0 }}
                  sx={{ backgroundColor: "rgba(52, 52, 52)", padding: 4 }}
                >
                  <Typography variant="h6" mb={1} color="white">
                    Meddelande (max 480 karaktärer) *
                  </Typography>
                  <TextareaAutosize
                    name="message"
                    value={formData.message}
                    placeholder={"Hej Morgan! ..."}
                    onChange={handleChange}
                    minRows={18}
                    maxLength={480}
                    style={{
                      width: "100%",
                      padding: "6px 12px",
                      fontSize: "1rem",
                      fontFamily: "Roboto",
                      borderRadius: "4px",
                      borderColor: "rgba(0, 0, 0, 0.1)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                    required
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  backgroundColor: "rgba(52, 52, 52)",
                  padding: 4,
                  height: "20%",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#BA1D37",
                    fontWeight: 700,
                    borderRadius: 2,
                    py: 2,
                    px: 8,
                    '&:hover': {backgroundColor: '#BA1D60'}
                  }}
                >
                  Skicka
                </Button>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>Din kontakt förfrågan har skickats</DialogTitle>
        <DialogActions sx={{ display:"flex" , justifyContent:"center"}}>
          <Button onClick={ handleClose } sx={{ bgcolor: "red", color: "white" }}>Stäng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};