// importerer nødvendige
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
//For at kunne håndtere brugerLogin importeres auth fra database.js
import { auth } from '../database/database';
//Styling
import LogInStyle from '../styles/LogInStyle';

// Login funktion
export default function Login() {
// Laver to const
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// handleLogin metode som byder brugeren velkommen hvis login succeeder 
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email,password);
      Alert.alert('Velkommen! \n Du er nu logget ind!');
    } catch (error) {
        Alert.alert('Fejl', error.message);
    }
  };

// Return del, som er indholdet på LoginScreen (inputfelter og loginknap)
  return (
    <View style={LogInStyle.loginContainer} >
        <Text style={LogInStyle.overskrift}>Log ind</Text>
        <Text style={LogInStyle.inputOverskrift}>Email</Text>
        <TextInput
            placeholder=""
            style={LogInStyle.inputFelt}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
        />
        <Text style={LogInStyle.inputOverskrift}>Kodeord</Text>
        <TextInput
            placeholder=""
            style={LogInStyle.inputFelt}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
     
        <TouchableOpacity style={LogInStyle.buttonContainer} onPress={handleLogin}>
            <Text style={LogInStyle.buttonTekst} >Log ind</Text>
        </TouchableOpacity>
           <View style={LogInStyle.containerTo}>
            <View style={LogInStyle.linje} />
            <Text style={LogInStyle.tekst}>eller</Text>
            <View style={LogInStyle.linje} />
        </View>
    </View>
  );
}