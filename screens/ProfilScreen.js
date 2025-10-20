//Importerer nødvendige
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ProfilStyle from "../styles/ProfilStyle";
import { useEffect, useState } from "react";
//Importerer firestorefunktion til at hente dokumenter fra databasen
import { getFirestore, doc, getDoc } from "firebase/firestore";
//For at kunne håndtere brugerLogin importeres auth fra database.js
import { auth } from "../database/database";
import PictureComponent from "../Components/PictureComponent";

const db = getFirestore();

export default function ProfilScreen() {
  const userEmail = auth.currentUser?.email;
  const [fuldeNavn, setFuldeNavn] = useState('');
  
  useEffect(() => {
    const fetuchUserData = async () => {
      //tjekker om bruger er logget ind
      if (auth.currentUser) {
        const docRef = doc(db, "bruger", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFuldeNavn(docSnap.data().fuldeNavn);
        }
      }
    }
    fetuchUserData();
}, []);

  return (
    <View style={ProfilStyle.container}>

      <View style={ProfilStyle.containerLogo}>
            <PictureComponent source={require('../assets/logo.png')} style={ProfilStyle.logoSize}/>
      </View>

      <View style={ProfilStyle.container1}>
        <PictureComponent source={require('../assets/user-image.png')} style={ProfilStyle.userBillede}/>
        <Text style={ProfilStyle.navn}>
          {fuldeNavn} {'\n'}
          Bestyrelsesmedlem
        </Text>
      </View>

      <View style={ProfilStyle.container2}>
        <Text style={ProfilStyle.email}>
          Email: {userEmail} {'\n'}
          Telefon: +45 36 09 23 49
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
