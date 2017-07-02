import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { createMeetupValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateMeetupForm';

const CreateMeetupForm = ({
  createMeetup,
  showDateTimePicker,
  checkTitle,
  handleSubmit,
  invalid,
  submiting,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.greenColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      selectionColor={Colors.greenColor}
      containerStyle={styles.item}
      multiline
    />
    <View style={styles.item}>
      <Button
        raised
        fontFamily="opnsen"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.greenColor}
        title="Create Meetup"
        raised
        fontFamily="opnsen"
        disabled={invalid || submiting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);
