import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme';
import { MainStack } from './src/components/MainStack';

  const App = () => (
  <PaperProvider theme={theme}>
    <MainStack />
  </PaperProvider>
);

export default App












