import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {lightGreen, amber} from '@material-ui/core/colors';
import {CssBaseline} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[500],
      main: lightGreen[700],
      dark: lightGreen[900],
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
    background: {
      default: "#fafafa"
    }
  },
  typography: {
    useNextVariants: true,
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
