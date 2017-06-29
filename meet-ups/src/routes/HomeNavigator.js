import { TabNavigator } from 'react-navigation';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import Colors from '../../constants/Colors';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  NotificationScreen: {
    screen: NotificationScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.greenColor,
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
