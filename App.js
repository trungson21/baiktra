// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { View } from "react-native";
import { StyleSheet, Image, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';

const Map = () => {
    return(
       <View>
            <View styles={styles.navBar}>
            <Image
            source={require('./assets/Iicon_Back.png')}
            style={styles.backIcon}></Image>
            <Text style={styles.text}>
                Next to you
            </Text>
         </View>

        <Image source={require('./assets/Maps.png')}
        style={styles.map}></Image>

    <Image source={require('./assets/HomeIndicator.png')}
        style={styles.home}></Image>
         <StatusBar style="auto" />
        </View>
    )
};

export default Map;

const styles = StyleSheet.create({
map:{
    margin: 10,
   width: 450,
   height: 700,
   
},

backIcon:{
    marginTop: 50,
    marginLeft: 30,
},

text:{
    fontSize: 25,
    marginTop: -30,
    marginLeft: 60,
    fontFamily: 'arial',
},

home:{
  justifyContent: 'center',
  marginLeft: 50,
  marginBottom: 1,
},

});


