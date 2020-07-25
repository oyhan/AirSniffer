import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGoogleMap from './components/map';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'OpenSans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyGoogleMap />
    </ThemeProvider>
  );
}

export default App;
