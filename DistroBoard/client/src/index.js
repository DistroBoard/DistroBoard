import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createMuiTheme({
  //Pallet
  palette: {
    type: "dark",
    primary: {
      main: '#90caf9',
      //contrastText: '#fff',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  //Scrollbar
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
          background: '#0000008c',

        },
        '*::-webkit-scrollbar-thumb': {
          background: '#f48fb1',
          borderRadius: '30px',
        },

      }
    }
  }


});




ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <App />
    </ThemeProvider>

  </Provider>,
  document.getElementById('root')
);
