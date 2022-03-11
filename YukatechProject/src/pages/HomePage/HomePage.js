import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomImageButton from '../../components/CustomButton/CustomImageButton';
import todoList from '../../json/todoList';


const HomePage = () => {

  const [data, setData] = useState(todoList);
  const [text, setText] = useState("");
  const dataAddFunc = () => {
    var item = {
      id:data.length,
      title:text,
      check:0
    }

    var tempArray = [...data, item]
    setData(tempArray)
    setText("")
  }

  const dataDeleteFunc = (id) => {
    var tempData = data.filter(x=>x.id !== id)
    setData(tempData)

  }

  const dataCheckFunc = (item) => {
    var tempData = data.filter(x=>x.id !== item.id)
    var item2 = {
      id:item.id,
      title:item.title,
      check: item.check == 1 ? 0 : 1
    }
    tempData = [...tempData, item2]
    setData(tempData)
       
  }

  const dataEditFunc = (item) => {
    /*var tempData = data.filter(x=>x.id !== item.id)
    var item2 = {
      id:item.id,
      title:item.title,
      check: item.check
    }
    tempData = [...tempData, item2]
    setData(tempData)*/

  }

  return (
    <View style={{flex:1}}>
      <View style = {styles.headerContainer}>
        <CustomImageButton
          widthB={25}
          source={require("../../../assets/images/list.png")}
        />
        <Text style={styles.textHeader}>Yapılacaklar</Text>
          <CustomImageButton
            onPress={() => Actions.loginpage()}
            widthB={25}
            source={require("../../../assets/images/logout.png")}
          />
      </View>
    <ScrollView style={styles.container}> 
      <View style={styles.inptContainer} >
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text)=>setText(text)}
        />
        <CustomImageButton
          onPress={()=>dataAddFunc()}
          bradius={50}
          widthB={50}
          heightB={50}
          bmargin={-10}
          source={require("../../../assets/images/plus2.png")}
        />
      </View>
      <View>
        <FlatList
          data={data.filter(x => x.check === 0 && x)}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.datacontainer} >
              <CustomImageButton
                  onPress={() => dataCheckFunc(item)}
                  widthB={40}
                  source={require("../../../assets/images/dry-clean.png")}
                />
              <Text style={styles.text}>{item.title}</Text>
              <View style={{ flexDirection: 'row', width: '20%' }} >
                <CustomImageButton
                  widthB={25}
                  source={require("../../../assets/images/edit1.png")}
                />
                <CustomImageButton
                  onPress={()=>dataDeleteFunc(item.id)}
                  source={require("../../../assets/images/delete1.png")}
                />
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.line} />
      <View>
        <FlatList
          data={data.filter(x => x.check === 1)}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.datacontainer} >
              <CustomImageButton
                  onPress={() => dataCheckFunc(item)}
                  widthB={40}
                  source={require("../../../assets/images/checked(1).png")}
               />
              <Text style={styles.text}>{item.title}</Text>
              <View style={{ flexDirection: 'row', width: '20%' }} >
                <CustomImageButton
                  widthB={25}
                  source={require("../../../assets/images/edit1.png")}
                />
                <CustomImageButton
                  onPress={()=>dataDeleteFunc(item.id)}
                  source={require("../../../assets/images/delete1.png")}
                />
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: '5%',
    height: '100%'
  },
  text: {
    width: '60%',
    color:"black",     
  },
  datacontainer: {
    marginVertical: 5,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 40,
    height: 60,
    padding: "5%", 
  },
  inptContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#A58CB3',
    borderRadius: 40,
    marginVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: '100%',
    marginLeft: '5%',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#5c4d7d',
    marginVertical:'1%',
    padding: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  textHeader:{
    fontSize: 20,
    fontWeight: '500',
    color:'white',
    
  },
  headerContainer:{
    backgroundColor:'#5c4d7d',
    width:'100%',
    height:'10%',
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",
    justifyContent: "space-between",
    

  }
})

export default HomePage