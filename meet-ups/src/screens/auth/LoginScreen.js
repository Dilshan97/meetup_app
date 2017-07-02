import React, { Component } from 'react';
import { Facebook } from 'expo';
import { Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import fbConfig from '../../../constants/fbConfig';

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
      const resp = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
    }
  }

  render() {
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
            <Button color={Colors.signUp}>
              <Text style={Fonts.buttonAuth}>Start from</Text>
              <MaterialCommunityIcons name="google" size={30} color={Colors.whiteColor} />
            </Button>
            <Button color={Colors.signIn}>
              <Text style={Fonts.buttonAuth}>Connect with</Text>
              <MaterialCommunityIcons name="facebook" size={30} color={Colors.whiteColor} />
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
