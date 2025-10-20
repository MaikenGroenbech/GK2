//Importerer nødvendige
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
//Styling og for at tilføje af billeder
import ProgramStyle from "../styles/ProgramStyle";
import PictureComponent from "../Components/PictureComponent";
import { Program } from "../data/Program";

export default function ProgramScreen() {
return (
    <View style={ProgramStyle.container}>
      <View style={ProgramStyle.containerLogo}>
        <PictureComponent source={require('../assets/logo.png')} style={ProgramStyle.logoSize}/>
      </View>
      <View style={ProgramStyle.programListeContainer}>
        <Text style={ProgramStyle.overskrift}>PROGRAM</Text>
        
        <ScrollView 
            style={ProgramStyle.scrollBar}
            showsVerticalScrollIndicator={true}>
          {
            Program.map((Program, key) => {
              return (
                <Text style={ProgramStyle.programListe} key={key}>{Program}</Text>
              )
            })
          }
        </ScrollView>    
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
