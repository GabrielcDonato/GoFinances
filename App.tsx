//bibliotecas
import React from 'react';
import { ThemeProvider } from 'styled-components';

//componentes
import theme, {} from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    
  <ThemeProvider theme={theme}>  
    <Dashboard/>
  </ThemeProvider>

  )
}