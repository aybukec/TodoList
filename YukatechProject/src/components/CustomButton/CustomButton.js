import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {styles.container}>  
      <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    width: 200,
    //height: '50%',
    padding: 15,
    marginTop:20,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 40,
  },
  text:{
    fontWeight: 'bold',
    color: 'black',

  },

})

export default CustomButton