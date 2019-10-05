import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class CardScreen extends Component{
    constructor(){
        super();
        this.state={
            cardImage: require('../../assets/card_intro.jpg'),
            oldDeck : this.shuffleDeck(),
            deckCounter: -1,
            numCounter : 0,
            //deckBeingUsed: []
        }
    }
    shuffleDeck = () => {
        var deck = [require('../../assets/PNG/2C.png'),require('../../assets/PNG/3C.png'),require('../../assets/PNG/4C.png'),require('../../assets/PNG/5C.png'),require('../../assets/PNG/6C.png'),
        require('../../assets/PNG/7C.png'),require('../../assets/PNG/8C.png'),require('../../assets/PNG/9C.png'),require('../../assets/PNG/10C.png'),require('../../assets/PNG/JC.png'),require('../../assets/PNG/QC.png'),
        require('../../assets/PNG/KC.png'),require('../../assets/PNG/AC.png'),require('../../assets/PNG/2H.png'),require('../../assets/PNG/3H.png'),require('../../assets/PNG/4H.png'),require('../../assets/PNG/5H.png'),
        require('../../assets/PNG/6H.png'),require('../../assets/PNG/7H.png'),require('../../assets/PNG/8H.png'),require('../../assets/PNG/9H.png'),require('../../assets/PNG/10H.png'),require('../../assets/PNG/JH.png'),
        require('../../assets/PNG/QH.png'),require('../../assets/PNG/KH.png'),require('../../assets/PNG/AH.png'),require('../../assets/PNG/2S.png'),require('../../assets/PNG/3S.png'),require('../../assets/PNG/4S.png'),
        require('../../assets/PNG/5S.png'),require('../../assets/PNG/6S.png'),require('../../assets/PNG/7S.png'),require('../../assets/PNG/8S.png'),require('../../assets/PNG/9S.png'),require('../../assets/PNG/10S.png'),
        require('../../assets/PNG/JS.png'),require('../../assets/PNG/QS.png'),require('../../assets/PNG/KS.png'),require('../../assets/PNG/AS.png'),require('../../assets/PNG/2D.png'),require('../../assets/PNG/3D.png'),
        require('../../assets/PNG/4D.png'),require('../../assets/PNG/5D.png'),require('../../assets/PNG/6D.png'),require('../../assets/PNG/7D.png'),require('../../assets/PNG/8D.png'),require('../../assets/PNG/9D.png'),
        require('../../assets/PNG/10D.png'),require('../../assets/PNG/JD.png'),require('../../assets/PNG/QD.png'),require('../../assets/PNG/KD.png'),require('../../assets/PNG/AD.png')];
        //shuffle deck ONE time, 52 cards in deck
        
        let randomCard;
        let tempX;
        for (let index = deck.length - 1; index > -1 ; index -= 1) {
            randomCard = Math.floor(Math.random() * deck.length);
            tempX = deck[index];
            deck[index] = deck[randomCard];
            deck[randomCard] = tempX;
        }
        console.log(deck);
        return deck;
    }
    displayCard = () => {
        var deck = this.state.oldDeck;
        if(this.state.deckCounter < 51) {
            this.state.deckCounter ++;
            this.state.numCounter ++;
            //this.state.deckBeingUsed[this.state.deckCounter] = deck[this.state.deckCounter];
            console.log(deck[this.state.deckCounter]);
            return deck[this.state.deckCounter];
        }else{
            //this.props.navigation.navigate('InputCard');
            this.props.navigation.navigate('InputCard', {
                deck: this.state.oldDeck, });
        }
    }
    oldCard = () =>{
        var deck = this.state.oldDeck;
        this.state.deckCounter--;
        this.state.numCounter--;
        console.log(deck[this.state.deckCounter]);
        return deck[this.state.deckCounter];
    }
    nextImage = ()=> {
        this.setState ({
            cardImage: this.displayCard()
        })
    }
    previousImage = () => {
        this.setState ({
            cardImage: this.oldCard()
        })
    }
    /*
    keepTrack = () => {
        //var inputArray = JSON.parse(JSON.stringify(this.state.oldDeck));
        //var inputArray = [...this.state.oldDeck];
        console.log(inputArray);
        return inputArray;
    }
    */


    render () {
        return (
            <View>
                <Image source={this.state.cardImage} style={styles.container}/>
                <TouchableOpacity style={styles.rightArrowStlye} onPress = {this.nextImage}>
                    <Image source = {require('../../assets/right_arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftArrowStlye} onPress = {this.previousImage}>
                    <Image source = {require('../../assets/left_arrow.png')}/>
                </TouchableOpacity>
                <Text style={styles.counterStyle}>{this.state.numCounter}/52</Text>
            </View>

        );
    }

    
}
//export let deck = new CardScreen();

const styles = StyleSheet.create({
  layoutStyle: {
    //flex:2,
    alignItems: 'center',
    justifyContent : 'center'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    //textAlignVertical : 'center'
  },
  rightArrowStlye:{
      alignItems: "flex-end",
      //marginHorizontal: 20,
      top: 500,
      position: 'absolute',
      marginLeft: 260
  },
  leftArrowStlye:{
      alignItems: "flex-start",
      marginHorizontal: 20,
      position : 'absolute',
      top: 500
  },
  container:{
      //flex: 1,
      width: 375,
      height: 500,
      resizeMode : 'contain'
  },
  counterStyle: {
      position:"absolute",
      //textAlign: 'center',
      marginTop: 537,
      fontSize: 18,
      marginLeft: 170
      
  }
});
