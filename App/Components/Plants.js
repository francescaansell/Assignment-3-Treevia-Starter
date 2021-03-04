import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
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
        width: '86%',
        backgroundColor: 'grey',
        marginLeft: '14%'}}
        />
    )
  };

  return (
    <View>
      <FlatList 
            style = {styles.list}
            data={props}
            renderItem={( {item} ) => {
              return (
              //console.log(item['common_name']);
              //undefine console.log(item[0]);
              //console.log(item['id']);
              <ListItem 
                roundAvatar
                style = {styles.item}
                title = { item['common_name'] } 
                subtitle = { item['family'] }
                avatar={{ uri: item['image_url']}}
                />
              )
            }} 
            /*
            keyExtractor={ (item, index) => {
               return item + index.toString()
            }}
            */
            keyExtractor={item => item['id']}
            ItemSeparatorComponent = {renderSeperator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 300,
    height: 40, 
    
  }, 
});