import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CardScreen from './src/screens/CardScreen';
import WordScreen from './src/screens/WordScreen';
import InputCardScreen from './src/screens/InputCardScreen';
import NumberDisplayScreen from './src/screens/NumberDisplayScreen';
import learningScreen from './src/screens/learningScreen';
import InputWords from './src/screens/InputWords';

const navigator = createStackNavigator({

    Home: HomeScreen,
    Card: CardScreen,
    Word: WordScreen,
    InputCard: InputCardScreen,
    NumDisplay: NumberDisplayScreen,
    learning: learningScreen,
    InputWord: InputWords
    
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'WMCT',
      headerBackTitle: 'Back'
    },
  }
);

export default createAppContainer(navigator);


