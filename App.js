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
 * 
 * 
 * My examples of my code running can be found in my readme file
 */


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import Plants from './App/Components/Plants'
import Search from './App/Components/Search'
import Logo from './App/Components/Logo'

export default function App() {
  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  const [searchPlantTerm] = useState("");
  const [searchSpeciesTerm] = useState("");

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
    console.log(results);
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);

  let contentDisplayed = null;

  if (loading) {
    contentDisplayed = (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large" color="black" />
    )
  } else {
    contentDisplayed = <Plants plants={plants} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Search getQuery={loadPlants} />
      <View style={{ flex: 7 }}>
        {contentDisplayed}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});