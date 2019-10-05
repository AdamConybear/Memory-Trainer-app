import React, {Component} from 'react';
import { Text, StyleSheet, View, Slider, Button, TextInput, Alert } from 'react-native';

export default class displayNum extends Component {
    constructor () {
        super();
        this.state = {
            digitDisplayed: '',
            count: -1,
            userDigits: 6,
            //diffRating: 5,
            status: false,
            textInputValue: '',
            digitArray: this.randArry(),
            digitCount: 0,
            overflowCount: 0

        }

    }
    randArry = () => {
        var numArray = [];
        var lastNumber = 0;
        for (let i =0; i < 50; i++){
            var randomDigit = Math.floor(Math.random() * 10);
            if (randomDigit != lastNumber){
                numArray.push(randomDigit);
                lastNumber = randomDigit;
            }else{
                randomDigit = Math.floor(Math.random() * 10);
                if (randomDigit != lastNumber){
                    numArray.push(randomDigit);
                    lastNumber = randomDigit;
                }else{
                    randomDigit = Math.floor(Math.random() * 10);
                    numArray.push(randomDigit);
                }
            }
        }
        console.log(numArray);
        return numArray;
    }
    dispDigit = () => {
        if (this.state.status == true){
            var arr = this.state.digitArray;
            this.state.count++;
            this.state.overflowCount++;
            return arr[this.state.count];
        }
        //var c = this.state.count;
        //console.log(arr[this.state.count]);
        //console.log("digit: " + this.state.digitDisplayed);
        //console.log(this.state.userDigits);
        //console.log(this.state.digitArray);
        
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.setState(() => ({ digitDisplayed: this.dispDigit()})),1000
        ); // 1000 ms is 1 second
      }
      
    componentDidUpdate(){
    if(this.state.overflowCount == this.state.userDigits){ 
        clearInterval(this.interval);
        //this.props.navigation.navigate('NumInput');
    }
    }
    
    componentWillUnmount(){
    clearInterval(this.interval);
    }

    ShowHideTextComponentView = () => {
        if(this.state.status == true){
          this.setState({status: false})
        }
        else{
          this.setState({status: true})
        }
    }
    GetValue = () => {
        const {textInputValue} = this.state;
        var inputArray = textInputValue.split('');

        var digitsUsed = [];
        for(let i = 0; i < this.state.userDigits; i++){
            digitsUsed[i] = this.state.digitArray[i];
        }
        console.log(inputArray);
        console.log(digitsUsed);

        
        for (let i = 0; i < digitsUsed.length; i++){
            if (inputArray[i] == digitsUsed[i]) {
                this.state.digitCount++;
            }
        }
        console.log(this.state.userDigits);
        console.log(this.state.digitCount);
        if (this.state.digitCount == this.state.userDigits){
            Alert.alert('Correct!');
            this.props.navigation.navigate('Home')
        }else{
            Alert.alert("Wrong, try again");
            this.props.navigation.navigate('Home')
        }
    }
    
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Enter amount of numbers to appear: {this.state.userDigits}</Text>
                    <Slider
                        style={{width: '100%', top:24}}
                        step = {1}
                        minimumValue = {0}
                        maximumValue={50}
                        value = {this.state.userDigits}
                        onValueChange = {(userDigits) => this.setState({userDigits})}
                    />
                    
                    {
                        this.state.status ? <Text style={styles.digitStyle}> {this.state.digitDisplayed} </Text> : null
                    }
                    
                    <View style={styles.buttonStyle}>
                        <Button 
                        title = 'Begin'
                        color = 'white'
                        onPress = {this.ShowHideTextComponentView}
                        />
                    </View>
                </View>
                <View>
                    <TextInput  
                        placeholder="Enter the digits that appeared"  
                        underlineColorAndroid='transparent'  
                        style={styles.inputStyle}  
                        keyboardType={'number-pad'}
                        onChangeText = {textInputValue => this.setState({textInputValue})}
                    />
                </View>
                <View style={styles.enterStyle}>
                    <Button 
                    title = "Enter"
                    color = 'black'
                    onPress = {this.GetValue}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    
  },
  digitStyle: {
    fontSize: 175,
    fontWeight: 'bold',
    position: 'absolute',
    top: 200,
    marginLeft: 100
  },
  buttonStyle : {
    top: 60,
    //marginTop: 0,
    backgroundColor: '#2666A0',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 5,
    textAlign:'center',
    position: 'absolute',

  },
  textStyle: {
    fontSize : 15,
    textAlign: 'center',
    position: 'absolute',
    padding: 5,
    top: 5
  },
  inputStyle: {
    position:"absolute",  
    height: 40,
    width: 200,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#2666A0',  
    marginBottom: 10,
    top: 150, 
    marginLeft: 45
  },
  enterStyle : {
      marginLeft: 265,
      position: 'absolute',
      top: 150
  },    
});
