import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --fonte: 'Montserrat', sans-serif;
    --branco: #FFFFFF;
    --preto: #000000;
    --cinza: #E2E2E2;
    --cinzafosco: #808080;
    --cinzabrilhante: #D3D3D3;
    --pretoT: rgba(0, 0, 0, 0.7);
  }

  body {
    margin: 0;
    font-family: var(--fonte);
    background: linear-gradient(
      111.1deg,
      #2f2f2f 0%,  
      #a9a9a9 100%   
    );
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
