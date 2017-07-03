import React from 'react';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';

import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';

import Colors from '../../constants/Colors';

const AddButton = styled(Touchable) `
  marginRight: 10;
`;

const NavbarDefaultStyle = {
  backgroundColor: Colors.greenColor,
};

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerStyle: NavbarDefaultStyle,
      headerRight: (
        <AddButton feedback="opacity" onPress={() => navigation.navigate('CreateMeetup')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </AddButton>
      ),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={25} color={tintColor} />
      ),
    }),
  },
  NotificationScreen: {
    screen: NotificationScreen,
    navigationOptions: {
      title: 'Notification',
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="notification" size={25} color={tintColor} />
      ),
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="account-circle" size={25} color={tintColor} />
      ),
    },
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
