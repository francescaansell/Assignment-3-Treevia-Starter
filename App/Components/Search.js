import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors, Images } from '../Themes'
import { Feather } from '@expo/vector-icons'; 

import { TouchableOpacityComponent } from 'react-native';

export default function Search(props) {
  
  const [text, setText] = useState("");
  const [searchPlant, setSearchPlant] = useState([])

  const search = (text) => {
    console.log('running search')
    setText('')
    props.query(text)
  }

  console.log(props);

	
	return (
	<View style = {styles.container}>

    <TouchableOpacity
      onPress={ (text) => search(text)} 
      >
    <Feather name="search" size={20} color="grey" style = {{marginTop: 5, marginLeft: 5, padding: 3}}/>
    </TouchableOpacity>
    <TextInput
      style={styles.textInput}
      onChangeText={text => setText(text)} 
      value={text} 
      onSubmitEditing = { (text) => search(text) }    
    />

  </View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		height: 10,
	
		justifyContent: 'flex-start'
	},
	textInput: {
		width: 340,
		paddingLeft: 10,
		
	},
 
});