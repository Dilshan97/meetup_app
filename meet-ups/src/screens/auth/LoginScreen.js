import React, { Component } from 'react';
import { Facebook, Google } from 'expo';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { login } from './actions';
import { LoadingScreen } from '../../commons';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

const MeetupText = styled.Text`
  color: ${Colors.greenColor};
  fontSize: 18;
  fontFamily: opnsenBold;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

@connect(state => ({
  isLoading: state.user.isLoading,
}), { login })
export default class LoginScreen extends Component {
  state = { }

  _onLoginPress = name => {
    if (name === 'facebook') {
      this._loginWithFacebook();
    } else {
      this._loginWithGoogle();
    }
  }

  async _loginWithFacebook() {
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
        permissions: ['public_profile', 'email'],
      });

    if (type === 'success') {
      this.props.login(token, 'facebook');
    } else {
      throw new Error('Something went wrong with facebook login');
    }
  }

  async _loginWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: googleConfig.CLIENT_ID_IOS,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        this.props.login(result.accessToken, 'google');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      throw e;
    }
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen color={Colors.greenColor} />;
    }
    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>GatherUp</Text>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
            </FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeText}>
                Start managing your <MeetupText>GatherUp</MeetupText> quickly and efficently
              </Text>
            </FlexContainer>
          </FlexContainer>
          <BottomButtonWrapper>
            <Button color={Colors.signUp} onPress={() => this._onLoginPress('google')}>
              <Text style={Fonts.buttonAuth}>Start from</Text>
              <MaterialCommunityIcons name="google" size={30} color={Colors.whiteColor} />
            </Button>
            <Button color={Colors.signIn} onPress={() => this._onLoginPress('facebook')}>
              <Text style={Fonts.buttonAuth}>Connect with</Text>
              <MaterialCommunityIcons name="facebook" size={30} color={Colors.whiteColor} />
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
