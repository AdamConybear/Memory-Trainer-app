import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <View style={styles.layoutStyle}>
      <Text style={styles.textStyle}>WMC Trainer</Text>
    </View>
    <View style={styles.buttonStyle}>
      <Button
      title = "Playing Cards"
      color = 'white'
      onPress = {() => navigation.navigate('Card')}
      />
    </View>
    <View style={styles.buttonStyle}>
      <Button
      title = "Random Words"
      color = 'white'
      onPress = {() => navigation.navigate('Word')}
      />
    </View>
    <View style={styles.buttonStyle} >
      <Button
      title = "Random numbers"
      color = 'white'
      onPress = {() => navigation.navigate('NumDisplay')}
      />
    </View>
    <TouchableOpacity style={styles.learningStyle} onPress = {() => navigation.navigate('learning')}>
      <Image source={require('../../assets/book_icon.png')}/>
    </TouchableOpacity>
  </View>
  );
  
};

const styles = StyleSheet.create({
  layoutStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 50,
    marginLeft: 110,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 60,
    backgroundColor: '#2666A0',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign:'center',
    top: 70
  },
  learningStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 140,
    marginTop: 505
  }
  
});
export default HomeScreen;
