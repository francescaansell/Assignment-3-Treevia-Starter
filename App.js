/**
 * @author Francesca Ansell
 * 
 * I have commented out onSubmitEditing and OnPress in SEARCH.js
 * 
 * @resources
 * https://www.youtube.com/watch?v=b5P6LIjQZEU&t=679s
 * https://www.youtube.com/watch?v=r-ENJLGrd3s
 * https://trefle.io/api/v1/plants?token=yLrPBPtJSf5OQTuyVSUKdVX1JVTyVumCD6649sT0n5g
 * https://www.robinwieruch.de/conditional-rendering-react
 * https://stackoverflow.com/questions/36284453/react-native-text-going-off-my-screen-refusing-to-wrap-what-to-do
 * https://learning.oreilly.com/library/view/react-native-for/9781484244548/html/346704_2_En_1_Chapter.xhtml
 * https://stackoverflow.com/questions/30115372/how-to-do-logging-in-react-native
 */


 import React, { useState, useEffect } from 'react';
 import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, 
   Image, TextInput, FlatList, Button } from 'react-native';
 import { Images, Colors, Metrics } from './App/Themes'
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
     //console.log(results);
     setLoading(false);
     setPlants(results);
   }
 
   useEffect(() => { loadPlants() }, []);

  if (loading) {
    return (
      <View>
        <View style={styles.logoView}>
          <Image source={Images.logo} style= {styles.logoImageLoading}/>
        </View>
        <ActivityIndicator animating={loading} size= {34} color = {'green'} />
      </View>
    )
  }
   
  
   return (
     <SafeAreaView style={styles.container}>
 
       <View style={styles.logoView}>
         <Image source={Images.logo} style= {styles.logoImage}/>
       </View>
 
       <View style = {styles.searchBar}>
         <Search plants={loadPlants}/>
       </View>
      
      <View style = {styles.plants}>
        {Plants(plants)}
      </View>

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
     padding: 20, 
     margin: 10, 
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
     borderRadius: 6, 
     marginBottom: 10, 
   }, 
   logoView: {
     width: Metrics.screenWidth /2,
     //width: 200, 
     //borderWidth: 1,
     height: 50,  
     marginTop: 25, 
     
   
   }, 
   logoImage: {
    width: Metrics.screenWidth /2, 
    //width: 200,
     height: 50,
   },
   logoImageLoading: {
     width: Metrics.screenWidth /2,
     height:50,
     flex: 1,
     justifyContent: 'center',
     marginLeft: 80, 
     marginBottom: 40,

     
   }
   
 });
 
 