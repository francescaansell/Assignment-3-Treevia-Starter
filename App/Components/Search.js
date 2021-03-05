import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors, Images } from '../Themes'

import { TouchableOpacityComponent } from 'react-native';

export default function Search(props) {

  
	const [text, setText] = useState("");
  const [searchPlant, setSearchPlant] = useState([])



  //FROM ADD TODO
  const search = (text) => {
    console.log('search')
    setText('')
    //props.loadPlants(plantSearch = text)
    
  }

	
	return (
	<View style = {styles.container}>

	<Button 
		title = "Go"
    color = 'green'
		//onPress = { search(text) }
    
		/>
	<TextInput
		style={styles.textInput}
		onChangeText={text => setText(text)} 
		value={text} 
		//onSubmitEditing = { search(text) }
    
    
	/>
	<View></View>
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