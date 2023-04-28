import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          "&:not(:focus):not(:placeholder-shown)": {
            WebkitBoxShadow: "0 0 0 100px #38a169 inset", // Change to your desired green color
          },
        },
      },
    },
  },
});

const reasons = ["Boka föreläsning", "Boka möte", "Sammarbete", "Annat"];

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  reason: string;
  message: string;
}
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
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
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: "700px",
              maxWidth: "1100px",
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              padding: { xs: "16px", md: "32px" },
              width: { md: "40%" },
            }}
          >
            <Typography variant="h2">
              Vad kul att du vill nå ut till mig!
            </Typography>
            <br></br>
            <Typography variant="h3">
              Vänligen fyll i de obligatoriska fälten så svarar jag inom två
              arbetsdagar
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            sx={{
              width: "100%",
              height: "700px",
              maxWidth: "1100px",
              margin: "0 auto",
              borderRadius: 4,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
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
                borderRadius: 4,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
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
                    label="Namn"
                    InputLabelProps={{
                      style: {
                        // Your custom styles for the label tag
                        color: "white",
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
                    InputLabelProps={{
                      style: {
                        // Your custom styles for the label tag
                        color: "white",
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
                    InputLabelProps={{
                      style: {
                        // Your custom styles for the label tag
                        color: "white",
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
                    select
                    label="Anledning för kontakt"
                    InputLabelProps={{
                      style: {
                        // Your custom styles for the label tag
                        color: "white",
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
                    // onChange={handleChange}
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
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
