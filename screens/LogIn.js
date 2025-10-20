//Importerer nødvendige
import React, { useState } from 'react';
import { View, Button } from "react-native";
import LogInStyle from "../styles/LogInStyle";
import Login from "../Components/LoginComponent";
import Signup from "../Components/SignUpComponent";
import PictureComponent from "../Components/PictureComponent";

//Funktion håndterer login og signup med skift mellem komponenterne
export default function LogInScreen() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <View style={LogInStyle.container}>
            <View style={LogInStyle.containerLogo}>
                <View>
                    <PictureComponent source={require('../assets/logo.png')} style={LogInStyle.logoSize}/>
                </View>       
            </View>

            <View style={LogInStyle.loginContainer}>
                {isLogin ? <Login /> : <Signup/>}
                <Button 
                    title={isLogin ? 'Opret en bruger' : 'Har du en allerede en profil? Log ind'}
                    onPress={() => setIsLogin(prev => !prev)}
            />
        </View>
    </View>
    
  );
}
