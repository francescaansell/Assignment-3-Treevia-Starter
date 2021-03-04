import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';
import { ListItem } from 'react-native-elements';

export default function Plants(props) {
  
  const data = props; 
  return (
    <View>
      <FlatList
            data={data}
            renderItem={( {item} ) => {
              <ListItem 
                roundAvatar
                title = {`${item.common_name} ${item.family}`}
                subtitle = {item.id}
                avatar={{ uri: item.image_url}}
                containerStyle={{botderBottomWidth: 0}}
                />
             }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // create styles as necessary
});
