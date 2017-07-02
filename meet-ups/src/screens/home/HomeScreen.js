import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { MyMeetupsList } from './components';
import { LoadingScreen } from '../../commons';

import { fetchMyMeetups } from './actions';
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors';

@connect(
  state => ({
    myMeetups: state.home.myMeetups,
  }),
  { fetchMyMeetups }
)
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: Colors.greenColor,
    },
    headerRight: (<View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateMeetup')}>
        <MaterialIcons
          name="add-circle"
          size={30}
          color={Colors.whiteColor}
        />
      </TouchableOpacity>
    </View>
    ),
    tabBarIcon: ({ tintColor }) => (<FontAwesome name="home" size={25} color={tintColor} />),
  });

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: { isFetched, data, error },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
