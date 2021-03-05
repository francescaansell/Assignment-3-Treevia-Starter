/**
 * @author Francesca Ansell
 */
 import React, { useState, useEffect } from 'react';
 import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, 
   Image, TextInput, FlatList, Button } from 'react-native';
 import { Images, Colors } from './App/Themes'
 import APIRequest from './App/Config/APIRequest'
 import Plants from './App/Components/Plants'
 import Search from './App/Components/Search'
 import { LogBox } from 'react-native';
 import { nominalTypeHack } from 'prop-types';
 import { render } from 'react-dom';
 
 export default function App() {
 
   const [loading, setLoading] = useState(false);
   const [plants, setPlants] = useState([]);
 
   // retrieve lists of plants
   const loadPlants = async (plantSearch = '', plantFilter = '') => {
     setLoading(true);
     setPlants([]);
     let results = [];
     // if there is no search term, then get list of plants
     if (plantSearch !== '') {
       results = await APIRequest.requestSearchPlants(plantSearch);
     } else {
       results = await APIRequest.requestPlantList(plantFilter);
     }
     //console.log('results');
     console.log(results);
     setLoading(false);
     setPlants(results);
   }
 
   useEffect(() => { loadPlants() }, []);

  if (loading) {
    return (
      <ActivityIndicator animating={loading} />
    )
  }
   
   
  
   return (
     <SafeAreaView style={styles.container}>
 
       <View style={styles.logoView}>
         <Image source={Images.logo} style= {{width:200, height:50}}/>
       </View>
 
       <View style = {styles.searchBar}>
         <Search plants={loadPlants}/>
       </View>
 
       
 
      
          <View style = {styles.plants}>
          {Plants(plants)}
        </View>
    
       
       
 
       {/* Also, checkout the "./App/Config/APIRequest.js", if you want custom API calls or use test data*/}
 
     </SafeAreaView>
   );
   }
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     justifyContent: 'center',
     alignItems: 'center', 
     marginTop: '25%',
   }, 
   
   searchBar: {
     width: 300,
     margin: 20,
     borderRadius: 6,
     borderWidth: 2,
     height: 40,
   }, 
 
   plants: {
     borderWidth: 2,
   }
   
 });
 