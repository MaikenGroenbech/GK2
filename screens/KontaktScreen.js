//Importerer nødvendige
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
//Styling
import KontaktStyle from "../styles/KontaktStyle";
//For at kunne tilføje billeder
import PictureComponent from "../Components/PictureComponent";


export default function KontaktScreen() {
  //Return del: Tekst som indeholder kontaktinformationer
  return (
    <View style={KontaktStyle.container}>
      <View style={KontaktStyle.containerLogo}>
        <PictureComponent source={require('../assets/logo.png')} style={KontaktStyle.logoSize}/>
      </View>

      <View style={KontaktStyle.tekstBoxKontakt}>
        <Text style={KontaktStyle.textKontakt}>Kontakt Os</Text>
        <Text style={KontaktStyle.text2Kontakt}>Telefontid kl. 8-15 - vi svarer altid på mail!</Text>
      </View>

      <View style={KontaktStyle.space}></View>

      <View>
        <Text style={KontaktStyle.Info}>Ring til os:
          {'\n'}
          <Text style={KontaktStyle.InfoNumber}>+45 33 44 66 44</Text>
          {'\n'}
          {'\n'}
          <Text style={KontaktStyle.InfoNumber}>AKUT:</Text>
          {'\n'}
          <Text style={KontaktStyle.InfoNumber}>+45 33 44 00 00</Text>
          {'\n'}
          {'\n'}
          <Text>Skriv til os:</Text>
          {'\n'}
          <Text style={KontaktStyle.InfoMail}>specialcenter.handicap@slagelse.dk</Text>
        </Text>


      </View>

      <StatusBar style="auto" />
    </View>
  );
}

