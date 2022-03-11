import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Actions } from 'react-native-router-flux';
import users from '../../json/users';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const forgotPasswordPressed = () => {
        console.warn("forgotPasswordPressed");
    }
    function onLogin() {
        if(users.filter(x=>x.username === username && x.password === password).length>0 )
        {
            //Alert.alert('Kullanıcı doğru..');
            Actions.homepage();
        }
        else {
            Alert.alert('Kullanıcı bulunamadı..');
        }
      }
  return (
    <View style = {styles.root}>
        <Image source={Logo} style = {styles.logo} //{height: height * 0.3}]} resizeMode = "contain" 
        />
        
        <CustomInput
            placeholder= "Kullanıcı Adı" 
            value={username} 
            setValue={setUsername}
            //onChangeText={username => setUsername(username)}
        />
        <CustomInput 
            placeholder= "Şifre" 
            value={password} 
            setValue={setPassword}
            //onChangeText={password => setPassword(password)}
            secureTextEntry
        />
        <CustomButton text = "Giriş Yap" onPress={() => onLogin()}/>
        <TouchableOpacity>
            <Text style={{ fontSize: 13, fontWeight: '500'}}>
            Şifremi Unuttum
            </Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 200,
        maxWidth: 300,
    },
    root: {
        flex:1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',

    },
})

export default LoginPage