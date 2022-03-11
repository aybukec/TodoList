import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style = {styles.container}>
      <TextInput 
      value = {value}
      onChangeText = {setValue}
      placeholder={placeholder} 
      secureTextEntry = {secureTextEntry}
      styles = {styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal:10,
        marginVertical: 10,
    },
    input:{},

})

export default CustomInput