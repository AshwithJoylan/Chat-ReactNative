import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Image from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {Highlight} from '../utils';
import {LOGO} from '../assets';
import styles from '../styles/forgot_password';
import {Colors} from '../metrics';

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
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
      <Highlight
        onPress={() => {
          setVisible(true);
          setTimeout(() => setVisible(false), 1000);
        }}
        underlayColor={Colors.LIGHT_WHITE}
        style={styles.button}>
        <Text style={styles.loginText}>Reset Password</Text>
      </Highlight>
      <Highlight
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.textButton}>
        <Text style={styles.bottomText}>Go Back</Text>
      </Highlight>
      {visible && (
        <View pointerEvents="none" style={[styles.snackBar]}>
          <View style={styles.snackBarContainer}>
            <Text style={styles.snackBarText}>
              Password reset email has been sent
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
