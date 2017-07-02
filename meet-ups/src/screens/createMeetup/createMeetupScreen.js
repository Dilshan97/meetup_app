import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { MeetupApi } from '../../../constants/api';
import { CreateMeetupForm } from './components';
import Colors from '../../../constants/Colors';
import styles from './styles/createMeetupScreen';

const meetupApi = new MeetupApi();

class CreateMeetupScreen extends Component {
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
    title: '',
    description: '',
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
    const { title, description, date } = this.state;

    if (title.length > 5 && description.length > 5 && date > moment()) {
      return false;
    }
    return true;
  }

  _chnageTitle = title => this.setState({ title })

  _chnageDescription = description => this.setState({ description })

  _createMeetup = async () => {
    const { title, description, date } = this.state;

    const res = await meetupApi.createGroupMeetups({
      title,
      description,
      date,
    });
  }

  render() {
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

export default CreateMeetupScreen;
