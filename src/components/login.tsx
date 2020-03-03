import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Image from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/login';
import {TextInput} from 'react-native-gesture-handler';
import {Highlight} from '../utils';
import {LOGO} from '../assets';
import {Colors} from '../metrics';

export default () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
      <Image resizeMode="contain" style={styles.logo} source={LOGO} />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={str => setState({...state, email: str})}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={str => setState({...state, password: str})}
      />
      <Highlight
        onPress={() => {
          navigation.replace('Home', {});
        }}
        underlayColor={Colors.LIGHT_WHITE}
        style={styles.button}>
        <Text style={styles.loginText}>Login</Text>
      </Highlight>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.bottomText}>Don't have an account?</Text>
          <Highlight
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.textButton}>
            <Text style={styles.bottomText}>Register</Text>
          </Highlight>
        </View>
        <Highlight
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={styles.textButton}>
          <Text style={styles.bottomText}>Forgot Password</Text>
        </Highlight>
      </View>
    </SafeAreaView>
  );
};
