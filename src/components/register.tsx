import React, {useState} from 'react';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Image from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {Highlight} from '../utils';
import {LOGO} from '../assets';
import styles from '../styles/register';
import {Colors} from '../metrics';

export default () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        onChangeText={str => setState({...state, password: str})}
      />
      <Highlight
        onPress={() => {
          navigation.goBack();
        }}
        underlayColor={Colors.LIGHT_WHITE}
        style={styles.button}>
        <Text style={styles.loginText}>Register</Text>
      </Highlight>
      <Highlight
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.textButton}>
        <Text style={styles.bottomText}>Go Back</Text>
      </Highlight>
    </SafeAreaView>
  );
};
