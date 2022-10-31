import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GlobalStyles} from './styles/globalStyles'
import { ThemeProvider } from 'styled-components';
import {Theme} from "./styles/theme"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);


