import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from "react-router-dom";

import { App } from './App';
import { darkTheme } from './theme/theme'

ReactDOM.render(
  <BrowserRouter>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </BrowserRouter>,
  document.getElementById('root')
);