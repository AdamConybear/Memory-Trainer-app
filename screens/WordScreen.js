import React, {Component} from 'react';
import { Text, StyleSheet, View, Button, Slider, TouchableOpacity, Image } from 'react-native';

export default class WordScreen extends Component {
  constructor() {
    super();
    this.state = {
      numWords: 5,
      status: true,
      wordArray: this.randomWords(),
      count: -1,
      wordCount: 0,
      wordDisplayed: '',
      intialStatement: "Press next arrow to begin"

    }
  }

  randomWords = () => {
    var array = ["milk","desk","purse","cell phone","twezers","rubber band","video games","fork","bottle","wagon","shoes","playing card","tv",
    "bag","greeting card","soap","charger","speakers","conditioner","radio","puddle","bowl","stockings","cup","car","sandal","bookmark","bread",
    "thread","couch","canvas","drawer","drill press","key chain","toddler","toothpaste","cat","truck","twister","keys","clamp","door","outlet",
    "coasters","speaker","toy car","candy wrapper","clock","book","spoon","CD","camera","braclet","tire swing","drone","flowers","zipper","hanger",
    "thermometer","hammer","lip gloss","street lights","glow stick","pen","blanket","bow","headphones","pencil","fanny pack","buckel","hair tie",
    "blouse","helmet","picture frame","lamp shade","arrow","air freshener","lamp","beef","photo album","necklace","sunglasses","glasses","computer",
    "window","pants","nail clippers","teeth","tooth picks","shovel","toes","mouse","bananas","mirror","seat belt","textbook","shirt","table","monitor",
    "fridge","toothbrush","clay pot","ping pong table","pool stick","bottle cap","scotch tape","carrots","sponge","plate","deodorant","sofa","box",
    "mouse pad","doll","brocolli","water bottle","finger nails","rubber duck","soda can","remote","bed","USB drive","grid paper","washing machine",
    "sketch pad","paint brush","sticky note","apple","eraser","balloon","paper","ice cube tray","eye patch","money","face wash","glass","sharpie",
    "thermostat","sand paper","clothes","chalk","vase","sailboat","stop sign","rusty nail","television","keyboard","phone","flowers","credit card",
    "ring","towel","tree","watch","highlighter","piercing","magnet","candle","shampoo","knife","toilet","hair brus","piano","guitar","newspaper",
    "chocolate","cinder block","tomato","pillow","needle","sidewalk","rug","spring","socks","cookie jar","flag","cork","button","shoe lace","house",
    "food","slipper","scissors","checkbook","wallet","perfume","mop","tissue box","chair","packing peanuts"];

    let randomWord;
    let temp;
    for (let index = array.length - 1; index > -1 ; index -= 1) {
        randomWord = Math.floor(Math.random() * array.length);
        temp = array[index];
        array[index] = array[randomWord];
        array[randomWord] = temp;
    }
    return array;
  }

  nextWord = () => {
    var userArray = this.state.wordArray;
    if ((this.state.wordCount < this.state.numWords)){
      //return card
      this.state.count++;
      this.state.wordCount++;
      console.log(userArray[this.state.count]);
      return userArray[this.state.count];
    }else{
      //navigate to input screen
      this.props.navigation.navigate('InputWord', {
        array: this.state.wordArray,
        words: this.state.numWords });
    }
  }
  prevWord = () => {
    var userArray = this.state.wordArray;
    this.state.count--;
    this.state.wordCount--;
    console.log(userArray[this.state.count]);
    return userArray[this.state.count];
  }
  showNextWord = () => {
    this.setState({
      wordDisplayed: this.nextWord(),
    })
  }
  showPrevWord = () => {
    this.setState({
      wordDisplayed: this.prevWord()
    })
  }

  ShowHideTextComponentView = () => {
    if(this.state.status == true){
      this.setState({status: false})
    }
    else{
      this.setState({status: true})
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Enter number of words to appear: {this.state.numWords}</Text>
        <Slider
            style={{width: '100%', top:20}}
            step = {1}
            minimumValue = {1}
            maximumValue={50}
            value = {this.state.numWords}
            onValueChange = {(numWords) => this.setState({numWords})}
        />
        <Text style={{position: 'absolute',top:90, left: 75,fontSize: 20}}>*Press next arrow to begin*</Text>
        
        <Text style={styles.wordStyle}> {this.state.wordDisplayed} </Text>
        <View>
          <Text style={{fontSize:20, top: 400, left: 175, position: 'absolute'}}>{this.state.wordCount}/{this.state.numWords}</Text>
        </View>
        <TouchableOpacity style={styles.rightArrowStlye} onPress = {this.showNextWord}>
            <Image source = {require('../../assets/right_arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftArrowStlye} onPress = {this.showPrevWord}>
            <Image source = {require('../../assets/left_arrow.png')}/>
        </TouchableOpacity>
      </View>
    );
  }


}
const styles = StyleSheet.create({
  layoutStyle: {
    marginTop : 60,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    top:10,
    textAlign: 'center'
  },
  buttonStyle: {
    top: 85,
    backgroundColor: '#2666A0',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 5,
    textAlign:'center',
    position: 'absolute',
    width: 100,
    left: 140
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
wordStyle: {
  //flex: 1,
  fontSize: 60,
  fontWeight: 'bold',
  alignContent: 'center',
  justifyContent: 'center',
  textAlign:'center',
  top: 175,
  //left: 40,
  //position: 'absolute',
  //marginHorizontal: 90
  
}
});
