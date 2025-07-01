import React from 'react';
import { ThemeProvider, useTheme } from './themes/ThemeContext.jsx';
import RoutesApp from './routes/RoutesApp';

const AppContainer = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
