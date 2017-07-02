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
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.greenColor,
    pressColor: Colors.greenColor,
    indicatorStyle: Colors.greenColor,
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
