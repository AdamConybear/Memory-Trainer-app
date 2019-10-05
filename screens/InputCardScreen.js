import React, {Component} from 'react';
import {View,Text, StyleSheet, Button, Picker, Alert, TouchableOpacity, Image} from 'react-native';

export default class InputCards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deckUsed: this.props.navigation.state.params.deck, // deck object I passed in
            count: 0,
            suit: '',
            value: '',
            cardCounter: 1,
            correctCount: 0,
            wrongCount: 0
        }
    }
    areEqual = (props) => {
        console.log(this.state.deckUsed);
        console.log(this.translate());
        if (this.state.deckUsed[this.state.count] == this.translate()){
            //they got it correct
            Alert.alert('Correct!');
            this.state.count++;
            this.state.cardCounter++;
            this.state.correctCount++;
        }else{
            //they got it wrong
            Alert.alert('Wrong! Move on to next card');
            this.state.count++; 
            this.state.cardCounter++;
            this.state.wrongCount++;
        }
    }

    translate = () => {
        //console.log(this.state.suit)
        var numValue = 0;
        if (this.state.value == '2' && this.state.suit == 'C'){
            numValue = 5;
        }else if(this.state.value == '3' && this.state.suit == 'C'){
            numValue = 6;
        }else if(this.state.value == '4' && this.state.suit == 'C'){
            numValue = 7;
        }else if(this.state.value == '5' && this.state.suit == 'C'){
            numValue = 8;
        }else if(this.state.value == '6' && this.state.suit == 'C'){
            numValue = 9;
        }else if(this.state.value == '7' && this.state.suit == 'C'){
            numValue = 10;
        }else if(this.state.value == '8' && this.state.suit == 'C'){
            numValue = 11;
        }else if(this.state.value == '9' && this.state.suit == 'C'){
            numValue = 12;
        }else if(this.state.value == '10' && this.state.suit == 'C'){
            numValue = 13;
        }else if(this.state.value == 'J' && this.state.suit == 'C'){
            numValue = 14;
        }else if(this.state.value == 'Q' && this.state.suit == 'C'){
            numValue = 15;
        }else if(this.state.value == 'K' && this.state.suit == 'C'){
            numValue = 16;
        }else if(this.state.value == 'A' && this.state.suit == 'C'){
            numValue = 17;
        }else if(this.state.value == '2' && this.state.suit == 'H'){
            numValue = 18;
        }else if(this.state.value == '3' && this.state.suit == 'H'){
            numValue = 19;
        }else if(this.state.value == '4' && this.state.suit == 'H'){
            numValue = 20;
        }else if(this.state.value == '5' && this.state.suit == 'H'){
            numValue = 21;
        }else if(this.state.value == '6' && this.state.suit == 'H'){
            numValue = 22;
        }else if(this.state.value == '7' && this.state.suit == 'H'){
            numValue = 23;
        }else if(this.state.value == '8' && this.state.suit == 'H'){
            numValue = 24;
        }else if(this.state.value == '9' && this.state.suit == 'H'){
            numValue = 25;
        }else if(this.state.value == '10' && this.state.suit == 'H'){
            numValue = 26;
        }else if(this.state.value == 'J' && this.state.suit == 'H'){
            numValue = 27;
        }else if(this.state.value == 'Q' && this.state.suit == 'H'){
            numValue = 28;
        }else if(this.state.value == 'K' && this.state.suit == 'H'){
            numValue = 29;
        }else if(this.state.value == 'A' && this.state.suit == 'H'){
            numValue = 30;
        }else if(this.state.value == '2' && this.state.suit == 'S'){
            numValue = 31;
        }else if(this.state.value == '3' && this.state.suit == 'S'){
            numValue = 32;
        }else if(this.state.value == '4' && this.state.suit == 'S'){
            numValue = 33;
        }else if(this.state.value == '5' && this.state.suit == 'S'){
            numValue = 34;
        }else if(this.state.value == '6' && this.state.suit == 'S'){
            numValue = 35;
        }else if(this.state.value == '7' && this.state.suit == 'S'){
            numValue = 36;
        }else if(this.state.value == '8' && this.state.suit == 'S'){
            numValue = 37;
        }else if(this.state.value == '9' && this.state.suit == 'S'){
            numValue = 38;
        }else if(this.state.value == '10' && this.state.suit == 'S'){
            numValue = 39;
        }else if(this.state.value == 'J' && this.state.suit == 'S'){
            numValue = 40;
        }else if(this.state.value == 'Q' && this.state.suit == 'S'){
            numValue = 41;
        }else if(this.state.value == 'K' && this.state.suit == 'S'){
            numValue = 42;
        }else if(this.state.value == 'A' && this.state.suit == 'S'){
            numValue = 43;
        }else if(this.state.value == '2' && this.state.suit == 'D'){
            numValue = 44;
        }else if(this.state.value == '3' && this.state.suit == 'D'){
            numValue = 45;
        }else if(this.state.value == '4' && this.state.suit == 'D'){
            numValue = 46;
        }else if(this.state.value == '5' && this.state.suit == 'D'){
            numValue = 47;
        }else if(this.state.value == '6' && this.state.suit == 'D'){
            numValue = 48;
        }else if(this.state.value == '7' && this.state.suit == 'D'){
            numValue = 49;
        }else if(this.state.value == '8' && this.state.suit == 'D'){
            numValue = 50;
        }else if(this.state.value == '9' && this.state.suit == 'D'){
            numValue = 51;
        }else if(this.state.value == '10' && this.state.suit == 'D'){
            numValue = 52;
        }else if(this.state.value == 'J' && this.state.suit == 'D'){
            numValue = 53;
        }else if(this.state.value == 'Q' && this.state.suit == 'D'){
            numValue = 54;
        }else if(this.state.value == 'K' && this.state.suit == 'D'){
            numValue = 55;
        }else if(this.state.value == 'A' && this.state.suit == 'D'){
            numValue = 56;
        }
        //console.log(numValue);
        return numValue;
    }
    

    render (){
        return (
            <View>
                <View>
                    <Text style={styles.titleStyle}>How well did you memorize?</Text>
                </View>
                <View>
                    <Text style={styles.promptStyle}>Select and Enter card: {this.state.cardCounter}</Text>
                </View>
                <View style={styles.valPicker}>
                    <Picker
                        selectedValue={this.state.value}
                        style={{height: 70, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({value: itemValue})
                        }>
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="Jack" value="J" />
                        <Picker.Item label="Queen" value="Q" />
                        <Picker.Item label="King" value="K" />
                        <Picker.Item label="Ace" value="A" />

                        
                    </Picker>
                </View>
                <View>
                    <Text style={styles.OFstyle}>of</Text>
                </View>
                <View style={styles.suitPicker}>
                    <Picker
                        selectedValue={this.state.suit}
                        style={{height: 70, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({suit: itemValue})
                        }>
                        <Picker.Item label="Clubs" value="C" />
                        <Picker.Item label="Diamonds" value="D" />
                        <Picker.Item label="Hearts" value="H" />
                        <Picker.Item label="Spades" value="S" />
                    </Picker>
                </View>
                <View style={styles.enterStyle}>
                    <Button 
                    title = "Enter"
                    color = 'black'
                    onPress = {this.areEqual}
                    />
                </View>
                <Text style={{fontSize: 25,position: 'absolute', top: 430, left: 50}}>Correct: {this.state.correctCount}</Text>
                <Text style={{fontSize: 25,position: 'absolute', top: 430, left: 220}}>Wrong: {this.state.wrongCount}</Text>
                <TouchableOpacity style={styles.homeStyle} onPress = {() => this.props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/home_icon.png')}/>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles= StyleSheet.create({
    suitPicker: {
        position: 'absolute',
        justifyContent: 'center',
        left: 250,
        top: 90
    },
    valPicker: {
        position: 'absolute',
        justifyContent: 'center',
        left: 25,
        top: 90
    },
    OFstyle: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30,
        top: 165
    },
    enterStyle : {
        top: 320,
        backgroundColor: '#6093C1',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 5,
        textAlign:'center',
        position: 'absolute',
        left: 150
    },
    promptStyle: {
        alignContent: 'center',
        top: 70,
        left: 85,
        fontSize: 20
    },
    titleStyle: {
        alignContent: 'center',
        top: 30,
        left: 13,
        fontSize: 27,
        fontWeight:'bold'
    },
    homeStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginLeft: 165,
        marginTop: 505
    }
})
