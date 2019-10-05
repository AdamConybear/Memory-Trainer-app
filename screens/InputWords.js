import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image,TextInput, Alert, Button } from 'react-native';

export default class InputWords extends Component {
    constructor (props) {
        super(props);
        this.state = {
            textInputValue: '',
            wordArray: this.props.navigation.state.params.array,
            wordCounter: 1,
            count:0,
            correctCount:0,
            wrongCount:0,
            numWords: this.props.navigation.state.params.words
        }
    }

    checkWord = () => {
        if (this.state.count < this.state.numWords){
            if (this.state.textInputValue == this.state.wordArray[this.state.count]){
                //they got it correct
                this.state.correctCount++;
                Alert.alert('Correct!');
            }else{
                this.state.wrongCount++;
                Alert.alert('Wrong! Move on to next word');
            }
            this.state.count++
            this.state.wordCounter++
        }else{
            this.props.navigation.navigate('Home');
        }

    }


    render(){
        return (
            <View>
                <View style={styles.layoutStyle}>
                    <Text style={styles.textStyle}>Enter Word: {this.state.wordCounter}</Text>
                    <TextInput  
                        placeholder="Enter the words that appeared"  
                        underlineColorAndroid='transparent'  
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        clearButtonMode = 'always'
                        style={styles.inputStyle}  
                        onChangeText = {textInputValue => this.setState({textInputValue})}
                    />
                    <View style={styles.enterStyle}>
                        <Button 
                        title = "Enter"
                        color = 'black'
                        onPress = {this.checkWord}
                        />
                    </View>
                </View>
                <Text style={{fontSize: 25,position: 'absolute', top: 280, left: 50}}>Correct: {this.state.correctCount}</Text>
                <Text style={{fontSize: 25,position: 'absolute', top: 280, left: 220}}>Wrong: {this.state.wrongCount}</Text>
                <TouchableOpacity style={styles.homeStyle} onPress = {() => this.props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/home_icon.png')}/>
                </TouchableOpacity>
            </View>
    
        );
    }
}

const styles = StyleSheet.create({
    layoutStyle: {
      top : 60,
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 30
    },
    inputStyle: {
        position:"absolute",  
        height: 40,
        width: 230,  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#2666A0',  
        marginBottom: 10,
        top: 70, 
        marginLeft: 45
    },
    enterStyle: {
        top: 145,
        //marginTop: 0,
        backgroundColor: '#2666A0',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 40,
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 5,
        textAlign:'center',
        position: 'absolute',
        width: 100
    },
    homeStyle: {
        //alignItems: 'center',
        //justifyContent: 'center',
        position: 'absolute',
        //marginLeft: 165,
        //marginTop: 505,
        //top: 400
        alignItems: "flex-end",
        left: 330,
        top: 5,
        right: 5
    }
})
