import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = { tabBarIcon: ({ tintColor }) => (<MaterialIcons name="account-circle" size={25} color={tintColor} />) }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
