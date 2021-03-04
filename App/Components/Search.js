import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors, Images } from '../Themes'

import { TouchableOpacityComponent } from 'react-native';

export default function Search(props) {

  
	const [text, setText] = useState("");


/*
  //FROM ADD TODO
  const search = () => {
    console.log("SEARCH")
    const plantsCopy = JSON.parse(JSON.stringify(plant));
    plantsCopy.push(text)
    console.log(plantsCopy)
    props.loadPlants( searchPlant(text) )
    setText('')
  }

*/
	
	return (
	<View style = {styles.container}>

	<Button 
		title = "Go"
    color = 'green'
		onPress = { text => setText('') }//, () => props.loadPlants(searchPlant = text)}
    	//onPress = {search}
		/>
	<TextInput
		style={styles.textInput}
		onChangeText={text => setText(text)} 
		value={text} 
		onSubmitEditing = { text=> setText('')} //, () => props.loadPlants(searchPlant = text) }
    	//onSumbitEditing = {search}
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
