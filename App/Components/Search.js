import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors, Images } from '../Themes'

import { TouchableOpacityComponent } from 'react-native';

export default function Search(props) {
	const [text, setText] = useState("");


	return (
	<View style = {styles.container}>
	{/*
		<TouchableOpacity 
			style={ styles.searchButton }
			onPress= {} >
        	<new Image source={Images.logo} style={{height: 30, width: 30}} />
			
        </TouchableOpacity>
	*/}
		<Button 
			title = "Go"
			/>
		<TextInput
			style={styles.textInput}
			onChangeText={text => setText(text)} 
			value={text} 
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
	searchButton: {
		height: 30, 
		width: 30, 
		borderWidth: 1,	
		backgroundColor: 'red',
	
	}
});
