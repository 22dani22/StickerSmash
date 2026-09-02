import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

import { useFonts } from 'expo-font';

import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
   
    'WorkSans-Black': require('../fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
  // return <Stack />;
};
export default RootLayout;

