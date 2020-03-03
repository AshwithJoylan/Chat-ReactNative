/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {Message} from '../components/chat_details';
import {ChatListDataProps} from '../components/chat_ui';
import {Colors, Spacing, Typography, Sizes} from '../metrics';
import moment from 'moment';
import Animated, {
  useCode,
  block,
  Value,
  set,
  Easing,
} from 'react-native-reanimated';
import {timing, bInterpolate} from 'react-native-redash';
interface MessageItemProps {
  item: Message;
  sender: ChatListDataProps;
}
const MessageItem = ({item, sender}: MessageItemProps) => {
  const {message, type, time} = item;
  const {image} = sender;

  const {value} = useMemo(
    () => ({
      value: new Value(0),
    }),
    [],
  );

  useCode(
    () =>
      block([
        set(
          value,
          timing({
            from: value,
            to: 1,
            duration: 300,
            easing: Easing.linear,
          }),
        ),
      ]),
    [],
  );

  const translateX = bInterpolate(
    value,
    type === 'received' ? -Sizes.WIDTH : Sizes.WIDTH,
    0,
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          alignItems: type === 'received' ? 'flex-start' : 'flex-end',
          transform: [{translateX}],
        },
      ]}>
      {type === 'received' ? (
        <View style={[styles.messageContainer]}>
          <Image style={styles.thumb} source={{uri: image}} />
          <View>
            <View style={styles.messageBoxReceive}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={{alignSelf: 'stretch', alignItems: 'flex-end'}}>
              <Text style={styles.time}>
                {moment(new Date(time)).format('LT')}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.messageContainer,
            {width: '80%', justifyContent: 'flex-end'},
          ]}>
          <View>
            <View style={styles.messageBoxSend}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={{alignSelf: 'stretch', alignItems: 'flex-start'}}>
              <Text style={styles.time}>
                {moment(new Date(time)).format('LT')}
              </Text>
            </View>
          </View>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  messageContainer: {
    flexDirection: 'row',
    width: '75%',
  },
  thumb: {
    width: Spacing.SIZE_40,
    height: Spacing.SIZE_40,
    borderRadius: Spacing.SIZE_10,
  },
  messageBoxReceive: {
    padding: Spacing.SIZE_20,
    marginLeft: Spacing.SIZE_15,
    borderTopLeftRadius: Spacing.SIZE_20,
    borderTopRightRadius: Spacing.SIZE_20,
    borderBottomRightRadius: Spacing.SIZE_20,
    backgroundColor: Colors.LIGHT_BLUE,
  },
  messageBoxSend: {
    padding: Spacing.SIZE_20,
    alignSelf: 'flex-end',
    borderTopLeftRadius: Spacing.SIZE_20,
    borderTopRightRadius: Spacing.SIZE_20,
    borderBottomLeftRadius: Spacing.SIZE_20,
    backgroundColor: Colors.LIGHT_ORANGE,
  },
  message: {
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: Spacing.SIZE_20,
  },
  time: {
    paddingTop: Spacing.SIZE_10,
    paddingBottom: Spacing.SIZE_20,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.LIGHT_TEXT,
  },
});

export default MessageItem;
