import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { fetchMeetups } from './constants/api';

export default class meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      meetups: []
    }
  }

  static defaultProps = {
      fetchMeetups
  }

  async componentDidMount() {
    this.setState({loading : true });
    const data = await this.props.fetchMeetups();
    this.setState({loading : false, meetups : data.meetups })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Meet up!
        </Text>
        {this.state.meetups.map((meetup, i) => (
           <Text key={i}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('meetup', () => meetup);
