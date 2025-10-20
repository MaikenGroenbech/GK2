//Importerer nødvendige
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Hvis der sker ændringer i brugerens login-status
import { onAuthStateChanged } from 'firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
//Importerer en bestem textFont
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';

//For at kunne bruge skærmene fra mappen 'screens', importeres de til app.js.
import HomeScreen from './screens/HomeScreen';
import KontaktScreen from './screens/KontaktScreen';
import KortScreen from './screens/KortScreen';
import ProfilScreen from './screens/ProfilScreen';
import LogInScreen from './screens/LogIn';
import ProgramScreen from './screens/Program';

//For at kunne håndtere brugerLogin importeres auth fra database.js
import { auth } from './database/database';

//Ikoner til bottomtab navigator
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a3aad1ff'
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      
    </Stack.Navigator>
  )
}

function KontaktStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a3aad1ff'
      },
    }}>
      <Stack.Screen name="Kontakt" component={KontaktScreen} />
    </Stack.Navigator>
  )
}

function KortStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a3aad1ff'
      },
    }}>
      <Stack.Screen name="Kort" component={KortScreen} />
    </Stack.Navigator>
  )
}

function ProfilStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#a3aad1ff'
        },
      }}>
      <Stack.Screen name="Profil" component={ProfilScreen} />
    </Stack.Navigator>
  )
}


function ProgramStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#a3aad1ff'
        },
      }}>
      <Stack.Screen name="Program" component={ProgramScreen} />
    </Stack.Navigator>
  )
}

function HovedTabs() {
  return(
  <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen 
            name = "Home"
            component = {HomeStack}
            options = {{  tabBarIcon: () => <Ionicons name="home" size={20} />,}}
          />
          <Tab.Screen
            name = "Program"
            component = {ProgramStack}
            options = {{  tabBarIcon: () => <Ionicons name="person-circle" size={20} />,}}
          /> 
          <Tab.Screen
            name = "Kort"
            component = {KortStack}
            options = {{  tabBarIcon: () => <Ionicons name="location" size={20} />,}}
          />  

          <Tab.Screen
            name = "Profil"
            component = {ProfilStack}
            options = {{  tabBarIcon: () => <Ionicons name="person-circle" size={20} />,}}
          />       
            
          <Tab.Screen
            name = "Kontakt"
            component = {KontaktStack}
            options = {{  tabBarIcon: () => <Ionicons name="help-circle" size={20} />,}}
          />

        </Tab.Navigator>
  )
}
  

export default function App() {
  useFonts({
    ArchitectsDaughter_400Regular,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
              <RootStack.Screen name="AppFlow" component={HovedTabs} />
          ) : (
            <>
              <RootStack.Screen name="LogIn" component={LogInScreen} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};