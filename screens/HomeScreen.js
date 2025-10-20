// Importerer nødvendige
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
//For at kunne håndtere brugerLogin importeres auth fra database.js
import { auth } from '../database/database';
//Importerer SignOut fra Firebase auth, så brugeren kan logge ud
import { signOut } from 'firebase/auth';

//Importerer for at tilføje billeder
import PictureComponent from '../Components/PictureComponent';
//Importerer styling
import HomeStyle from '../styles/HomeStyle';

export default function MainScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout fejlede:', error.message);
    }
  };


// Return del: logo, tekst og logud knap
  return (
    <View style={HomeStyle.container} >
      <TouchableOpacity style={HomeStyle.logudcontainer}  onPress={handleLogout}>
        <Text style={HomeStyle.logudbtn} >Log ud</Text>
      </TouchableOpacity>

      <Text style={HomeStyle.tekst1}>
        Oplevelser {"\n"}
      </Text>
      <Text style={HomeStyle.tekst2}>
        der styrker {"\n"}
        relationer & drømme
      </Text>

      <View style={HomeStyle.containerLogo}>
          <View>
            <PictureComponent source={require('../assets/logo.png')} style={HomeStyle.logoSize}/>
          </View>       
      </View>

    </View>
  );
}