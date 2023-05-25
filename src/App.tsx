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
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"; 

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
  const [firebaseArray, setfirebaseArray] = useState<any>('');
  const [itemdata, setItemData] = useState<any>();
  const location = useLocation();

  useEffect(() => {

    (async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      const tempArray: any[] = []
      querySnapshot.forEach((doc: any) => {
          tempArray.push(doc.data())
      })

      setfirebaseArray(tempArray);
  })()
    
  }, []);

  useEffect(() => {
    if( location.pathname.includes('/admin')) {
      setAdminView(true);
    } else {
      setAdminView(false)
    }
  }, [location])


  const  getTextProps = (itemTitle:any,itemContent:any,itemLocation:any, itemId: any) => {

    setItemData({title: itemTitle, content: itemContent, location: itemLocation, id: itemId })
    
  }


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
          <Route path="/" element={<Home firebaseArray={firebaseArray}/>} />
          <Route path="/about" element={<About firebaseArray={firebaseArray} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arbeta-med-mig" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="kalender" element={ <AdminCalendar /> } />
            <Route path="kalender/aktiviteter" element={ <AdminActivities/> } />
            <Route path="kalender/skapa-aktivitet" element={ <AdminCreateActivity/> } />
            <Route path="updatetext" element={ <UpdateText getTextProps={getTextProps} firebaseText={firebaseArray}/>} />
            <Route path="dashboard" element={ <DashBoard itemdata={itemdata} setfirebaseArray={setfirebaseArray}/>} />
          </Route>
        </Routes>
        { adminView ? '' : <Footer />}
      </div>
    </ThemeProvider>

 )
}

export default App;
