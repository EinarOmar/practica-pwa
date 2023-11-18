import React, {useState, useEffect} from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { db } from '../config/firebase';
import { LoaderAnimation } from '../components/customs/LoaderAnimation';
import { Button, Paper, Switch, useTheme } from '@mui/material';

export default function withRoot(Component) {
  function WithRoot(props) {


    const [themeMode, setThemeMode] = useState('light');
    const [palette, setPalette] = useState({});
  
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
        const docSnapshot = await getDoc(docRef);
        const data = docSnapshot.data();
        setPalette(data[themeMode]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
  
      fetchData();
      
    }, [themeMode]);
  
    const handleThemeToggle = () => {
      setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
    };
  
    const theme = createTheme({
      palette: {
             primary: {
               light: '#051efe',
               main: '#0c2cfb',
               dark: '#0a22f5',
             },
             secondary: {
               light: '#ee105a',
               main: '#f00c54',
               dark: '#941153',
             },
           },
    });

    return (
      <ThemeProvider theme={theme}>

         
          <Component {...props} />


      </ThemeProvider>
    );
  }

  return WithRoot;
}
