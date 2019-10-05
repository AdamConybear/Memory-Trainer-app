import React from 'react';
import { Text, StyleSheet, View, Button, Linking } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View style={styles.layoutStyle}>
    <Text style={styles.textStyle}>Learn</Text>
    <View style={styles.buttonStyle}>
      <Button
      title = "How to memorize playing cards"
      color = 'white'
      onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=yevxvTbUa4s')}}
      />    
    </View>
    <View style={styles.buttonStyle}>
      <Button
      title = "How to memorize words"
      color = 'white'
      onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=dgazFLisonU')}}
      />
    </View>
    <View style={styles.buttonStyle}>
      <Button
      title = "How to memorize numbers"
      color = 'white'
      onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=SqoM7AOt-dQ&t=147s')}}
      />
    </View>
  </View>
  );
  
};

const styles = StyleSheet.create({
  layoutStyle: {
    marginTop : 60,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30
  },
  buttonStyle : {
    marginTop: 50,
    backgroundColor: '#203242',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign:'center',
    top: 20
  }
});

export default HomeScreen;