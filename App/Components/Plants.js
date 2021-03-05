import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image, Button } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';
import { ListItem, Avatar } from 'react-native-elements';

export default function Plants(props) {
  
  //valid console.log(props[0])
  //not valid console.log(props[0].common_name;
  const renderSeperator = () => {
    return (
      <View 
        style= {{ 
        height: 1, 
        width: '100%',
        backgroundColor: 'grey',
        }}
        />
    )
  };

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url)
    console.log("running openBrowser");
  }


  const listItemRender = (item) => {
    return (
      
      <TouchableOpacity 
      style= {styles.listItem}
      //onClick = {openBrowser(item.url)} 
      >
        {/* <Image source={item.image_url} style = {styles.image} />  */ }
        <View style= {{flexShrink: 1}}>
          <Text style= {{fontWeight: 'bold'}}> {item.common_name}</Text>
          <Text> Scientific Name: {item.scientific_name} </Text>
          <Text style= {{flexShrink: 1}}> This plant comes from the {item.family} family and genus {item.genus} </Text>
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <View>
      <FlatList 
            style = {styles.list}
            data={props}
            keyExtractor={item => item.key}
            ItemSeparatorComponent = {renderSeperator}
            renderItem = { ( { item, index }) => {
              return listItemRender(item);
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
   
  listItem: {
    padding: 10, 
    flex: 1,
    flexDirection: 'row',
    marginLeft: 1,


  },
  image: {
    width: 40, 
    height: 40, 
    borderWidth: 1, 
    borderRadius: 100, 
    marginRight: 5
  }
});