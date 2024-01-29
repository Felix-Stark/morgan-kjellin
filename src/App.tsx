import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/regularComponents/header/Header";
import { Footer } from "./components/regularComponents/footer/Footer";
import { About } from "./Views/About/About";
import { Contact } from "./Views/Contact/Contact";
import { Home } from "./Views/Home/Home";
import { Work } from "./Views/Work/Work";
import { Grief } from "./Views/Grief/Grief";
import { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/system";
import "./MUI-Themes/theme.types";
import Admin from "./Views/Admin/Admin";
import AdminCalendar from "./Views/Admin/AdminCalendar";
import AdminActivities from "./Views/Admin/AdminActivities";
import AdminHandleActivity from "./Views/Admin/AdminHandleActivity";
import UpdateText from "./Views/Admin/UpdateText";
import DashBoard from "./Views/Admin/AdminDashBoard";
import { db } from '../firebase-config';
import { DocumentData, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"; 
import { ContentObject } from './Types/types'
import { useLocation } from 'react-router'
import NotFound from "./NotFound";

const themeOptions: ThemeOptions = {
  palette: {
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
      main: "#FAFAFA",
    },
  },
  typography: {
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
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<React.ReactNode>(<></>);
  const [adminView, setAdminView] = useState(true);
  const [firebaseArray, setfirebaseArray] = useState<ContentObject[]>([]);
  const [itemdata, setItemData] = useState<ContentObject>({
    id: '',
    title: '',
    content: '',
    location: ''
  });
  const location = useLocation();

  useEffect(() => {

    (async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      const tempArray: DocumentData[] = []
      querySnapshot.forEach((doc) => {
          tempArray.push(doc.data())
      })

      setfirebaseArray(tempArray as ContentObject[]);
    })();

  }, []);

  useEffect(() => {
    if( location.pathname.includes('/admin')) {
      setAdminView(true);
    } else {
      setAdminView(false)
    }
  }, [location])


  const  getTextProps = (itemTitle: string, itemContent: string, itemLocation: string, itemId: string) => {

    setItemData({title: itemTitle, content: itemContent, location: itemLocation, id: itemId })
    
  }


  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
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
          <Route path="/" element={<Home firebaseArray={firebaseArray}/>} />
          <Route path="/about" element={<About firebaseArray={firebaseArray} />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/arbeta-med-mig" element={<Work firebaseArray={firebaseArray} />} />
          <Route path ="/sorg" element={<Grief firebaseArray={firebaseArray} />}/>
          <Route path="/admin" element={<Admin />}>
            <Route path="kalender" element={ <AdminCalendar /> } />
            <Route path="kalender/aktiviteter" element={ <AdminActivities/> } />
            <Route path="kalender/skapa-aktivitet" element={ <AdminHandleActivity/> } />
            <Route path="updatetext" element={ <UpdateText getTextProps={getTextProps} firebaseText={firebaseArray}/>} />
            <Route path="dashboard" element={ <DashBoard itemdata={itemdata} setfirebaseArray={setfirebaseArray}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        { adminView ? '' : <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
