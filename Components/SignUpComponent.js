// importerer nødvendige
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
//Importerer for at kunne oprette ny bruger med email + password i firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';
//For at kunne håndtere brugerLogin importeres auth fra database.js
import { auth } from '../database/database';
//Importerer for at kunne hente dokumenter fra databasen
import { getFirestore, doc, setDoc } from 'firebase/firestore';

//Importerer styling for signup
import OpretStyle from '../styles/OpretStyle';

const db = getFirestore();

export default function Signup() {
    
// Opretter en const til email, en til password og en til fuldeNavn 
    const [email, setEmail] = useState(''); //Husk tomme strenge
    const [fuldeNavn, setFuldeNavn] = useState(''); //Husk tomme strenge
    const [password, setPassword] = useState('');
  

// Metode der opretter brugeren med createUserWithEmailAndPassword
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      //Gemmer fulde navn i Firestore:
      const bruger = userCredential.user;
      await setDoc(doc(db, "bruger", bruger.uid), {
        fuldeNavn: fuldeNavn,
        email: email,
      });
      Alert.alert('Bruger oprettet!');
    } catch (error) {
      Alert.alert('Fejl', error.message);
    }
  };

// Return del viser input felter og en knap til at oprette bruger
    return (
      <View style={OpretStyle.loginContainer}>
        <Text style={OpretStyle.overskrift}>Opret din profil</Text>
        <Text style={OpretStyle.inputOverskrift}>Fulde navn</Text>
        <TextInput
          placeholder="Fulde navn"
          style={OpretStyle.inputFelt}
          value={fuldeNavn}
          onChangeText={setFuldeNavn}
          autoCapitalize="none"
        />


        <Text style={OpretStyle.inputOverskrift}>Email</Text>
        <TextInput
          placeholder="Email"
          style={OpretStyle.inputFelt}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={OpretStyle.inputOverskrift}>Kodeord</Text>
        <TextInput
          placeholder="Kodeord"
          style={OpretStyle.inputFelt}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={OpretStyle.buttonContainer} onPress={handleSignup}>
          <Text style={OpretStyle.buttonTekst}>Opret bruger</Text>
        </TouchableOpacity>
      </View>
    );
  }