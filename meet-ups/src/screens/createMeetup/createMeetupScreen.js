import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import moment from 'moment';

import { CreateMeetupForm } from './components';
import { LoadingScreen } from '../../commons';
import { createMeetup } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/createMeetupScreen';

@connect(
  state => ({
    meetup: state.createMeetup,
  }),
  { createMeetup }
)
export default class CreateMeetupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create a new Meetup',
    headerStyle: {
      backgroundColor: Colors.greenColor,
    },
    headerTintColor: Colors.whiteColor,
    headerLeft: (<View>
      <TouchableOpacity style={styles.iconClose} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="close"
          size={30}
          color={Colors.whiteColor}
        />
      </TouchableOpacity>
    </View>
    ),
  })

  state = {
    isDateTimePickerVisible: false,
    date: moment(),
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _checkTitle() {
    const { date } = this.state;
    if (this.state.date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a Meetup Date';
  }

  _checkIfButtonDisable() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createMeetup = async values => {
    await this.props.createMeetup(values);
    this.props.navigation.goBack();
  }

  render() {
    const {
      meetup,
    } = this.props;
    if (meetup.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (meetup.error.on) {
      return (
        <View style={styles.root}>
          <Text>{meetup.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateMeetupForm
          createMeetup={this._createMeetup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}
