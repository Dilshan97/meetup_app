import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class NotificationScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.greenColor,
    },
    tabBarIcon: ({ tintColor }) => (<Entypo name="notification" size={25} color={tintColor} />),
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

export default NotificationScreen;
