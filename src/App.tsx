import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/regularComponents/header/Header";
import { Footer } from "./components/regularComponents/footer/Footer";
import { About } from "./Views/About/About";
import { Contact } from "./Views/Contact/Contact";
import { Home } from "./Views/Home/Home";
import { Work } from "./Views/Work/Work";
import { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Blog } from "./Views/Blog/Blog";
import { GlobalStyles } from "@mui/system";
import "./MUI-Themes/theme.types";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#342C39",
    },
    secondary: {
      main: "#1E1E1E",
    },
    detailRed: {
      main: "#BA1D37",
    },
    bgWhite: {
      main: "#F6F6F6",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
};

const globalTheme = createTheme(themeOptions);

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles
        styles={{
          "input:-webkit-autofill, textarea:-webkit-autofill": {
            backgroundColor: "white !important", // Desired input background color for autofill
            WebkitTextFillColor: "rgba(0, 0, 0, 0.87) !important", // Desired input text color for autofill
          },
        }}
      />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Contact
                handleModalOpen={handleModalOpen}
                handleModalClose={handleModalClose}
              />
            }
          />
          <Route path="/arbeta-med-mig" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
