import { useEffect, useState } from "react";
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
import Admin from "./Views/Admin/Admin";
import AdminLogin from "./components/adminComponents/login/AdminLogin";
import AdminCalendar from "./Views/Admin/AdminCalendar";
import AdminActivities from "./Views/Admin/AdminActivities";
import AdminCreateActivity from "./Views/Admin/AdminCreateActivity";
import UpdateText from "./Views/Admin/UpdateText";
import DashBoard from "./Views/Admin/AdminDashBoard";
import { db } from '../firebase/firebase-config';
import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 

import { useLocation } from 'react-router'

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
  const [adminView, setAdminView] = useState(true);
  const [testText, setTestText] = useState<string>('');
  const location = useLocation();

  useEffect(() => {

    async function getPosts() {
      const postsRef = doc(db, 'posts', 'post');
  
      const docSnap = await getDoc(postsRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();

        console.log('data', data.post.title )

        setTestText(data.post.title);

      } else {
        console.log("No such document!");
      }
    }
    getPosts();
    
  }, []);

  useEffect(() => {
    if( location.pathname.includes('/admin')) {
      setAdminView(true);
    } else {
      setAdminView(false)
    }
  }, [location])
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
        {/* { adminView ? '' : <Header />} */} 
        <Header />
        <Routes>
          <Route path="/" element={<Home testText={testText}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arbeta-med-mig" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="kalender" element={ <AdminCalendar /> } />
            <Route path="kalender/aktiviteter" element={ <AdminActivities/> } />
            <Route path="kalender/skapa-aktivitet" element={ <AdminCreateActivity/> } />
            <Route path="updatetext" element={ <UpdateText/>} />
            <Route path="dashboard" element={ <DashBoard/>} />
          </Route>
        </Routes>
        { adminView ? '' : <Footer />}
      </div>
    </ThemeProvider>

 )
}

export default App;
