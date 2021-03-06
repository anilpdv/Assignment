import React from 'react';
import BottomNavigationBar from './src/components/BottomNavigationBar';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import config from './src/lib/config';
import TopHeader from './src/components/TopHeader';

const theme = {
  ...DefaultTheme,
  flex: 1,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: config.PRIMARY_THEME_COLOR_600,
    accent: config.SECONDARY_THEME_COLOR_500,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TopHeader />
      <BottomNavigationBar />
    </PaperProvider>
  );
}
