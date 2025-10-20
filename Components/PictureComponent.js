//Genanvendelig komponent til at vise billeder:
import { View, Image } from 'react-native';

export default function PictureComponent({source, style}) {
  return (
    <View>
      <Image source={source} style={style} />    
    </View>
  );
}