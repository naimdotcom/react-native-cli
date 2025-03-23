import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RegistrationStyles} from './style';
import {cf} from '../../styles/global';
import PressableBtn from '../ui/PressableBtn';
const signup = require('../../../assets/Images/signup.jpg');

export type signup = {
  name: string;
  email: string;
  password: string;
};

const Registration = () => {
  const [signupInfo, setSignupInfo] = useState<signup>({
    name: '',
    email: '',
    password: '',
  });

  const handlChangeText = (e: any, id: string) => {
    setSignupInfo({
      ...signupInfo,
      [id]: e,
    });
  };

  return (
    <>
      <View>
        <ImageBackground
          source={signup}
          resizeMode="cover"
          style={{
            ...RegistrationStyles.image,
          }}>
          <View style={RegistrationStyles.overlay}></View>

          {/* content card */}
          {/* Keyboard Avoiding + ScrollView */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              keyboardShouldPersistTaps="handled">
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={RegistrationStyles.card}>
                  <Text style={RegistrationStyles.title}>
                    Create an Account
                  </Text>

                  <View>
                    <Text style={RegistrationStyles.text}>Enter your Name</Text>
                    <TextInput
                      placeholder="Name"
                      keyboardType="default"
                      style={cf(RegistrationStyles.textInput)}
                      placeholderTextColor={'#AAA'}
                      onChangeText={e => handlChangeText(e, 'name')}
                    />
                  </View>

                  <View>
                    <Text style={RegistrationStyles.text}>
                      Enter your email address
                    </Text>
                    <TextInput
                      placeholder="Email"
                      keyboardType="email-address"
                      style={cf(RegistrationStyles.textInput)}
                      placeholderTextColor={'#AAA'}
                      onChangeText={e => handlChangeText(e, 'email')}
                    />
                  </View>

                  <View>
                    <Text style={RegistrationStyles.text}>Enter Password</Text>
                    <TextInput
                      placeholder="Password"
                      keyboardType="default"
                      style={cf(RegistrationStyles.textInput)}
                      placeholderTextColor={'#AAA'}
                      secureTextEntry={true}
                      onChangeText={e => handlChangeText(e, 'password')}
                    />
                  </View>

                  <View>
                    <PressableBtn children={'Sign Up'} btnStyle={{}} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default Registration;
