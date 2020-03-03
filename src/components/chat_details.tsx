/* eslint-disable react-native/no-inline-styles */
import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Image from 'react-native-fast-image';
import styles from '../styles/chat_details';
import {ChatListDataProps} from './chat_ui';
import {Button, MessageItem} from '../utils';
import {Colors} from '../metrics';
import SafeAreaView from 'react-native-safe-area-view';
interface ChatDetailsProps {}

export default ({}: ChatDetailsProps) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item: sender} = route.params as {
    item: ChatListDataProps;
  };
  const [messages] = useState<Array<Message>>(dummyMessages);
  const [message, setMessage] = useState('');
  const scrollView = createRef<ScrollView>();

  // Sending message
  const sendMessage = () => {
    if (message) {
      Keyboard.dismiss();
      const msg: Message = {
        type: 'sent',
        message,
        time: Date.now(),
      };
      const sentMsg: Message = {
        type: 'received',
        message,
        time: Date.now(),
      };

      messages.push(msg);
      setMessage('');
      messages.push(sentMsg);
    }
  };

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent
          backgroundColor="#DEDEDE"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <Button onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Ion size={25} name="ios-arrow-back" color="black" />
          </Button>
          <View style={styles.content}>
            <Image source={{uri: sender.image}} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.sender}>{sender.sender}</Text>
              <Text style={styles.position}>Online</Text>
            </View>
          </View>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ref={scrollView}
          onContentSizeChange={() => {
            scrollView.current?.scrollToEnd();
          }}
          contentContainerStyle={styles.contentContainer}>
          {messages.map((item, index) => (
            <MessageItem key={index.toString()} {...{item, sender, index}} />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={str => setMessage(str)}
            style={styles.input}
            placeholder="Type Something"
          />
          <Button
            onPress={sendMessage}
            underlayColor="transparent"
            style={styles.button}>
            <Ion name="md-send" size={22} color={Colors.LIGHT_TEXT} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export interface Message {
  message: string;
  type: 'sent' | 'received';
  time: number;
}

const dummyMessages: Array<Message> = [
  {
    message: 'Hi, How are u?',
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: 'Hi, I am fine',
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
];
