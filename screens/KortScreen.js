//Importerer nødvendige
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
//Styling og for at tilføje af billeder
import KortStyle from "../styles/KortStyle";
import PictureComponent from "../Components/PictureComponent";

export default function KortScreen() {
  //Return del: tekst omkring lokation og billede indsat af lokationen
  return (
      <View style={KortStyle.container}>

      <View style={KortStyle.containerLogo}>
        <PictureComponent source={require('../assets/logo.png')} style={KortStyle.logoSize}/>
      </View>
      <View style={KortStyle.container1}>
        <Text style={KortStyle.overskrifter}>Her finder du Festivalen!</Text>
        
        <View style={KortStyle.space}></View>
      
        <View style={KortStyle.kort}>
          <Text style={KortStyle.tekstKort}>Autisme Center Vestsjælland</Text>
          <Text style={KortStyle.tekstKort}>Adresse: Rosenkildevej 85</Text>
        </View>  
        
        <View style={KortStyle.kort}> 
          <PictureComponent source={require('../assets/BilledeKort.png')} style={KortStyle.kortBillede}/>
        </View>
      </View>    
      <StatusBar style="auto" />
    </View>
  );
}
