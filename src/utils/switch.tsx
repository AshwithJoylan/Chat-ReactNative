/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {timing, bInterpolate} from 'react-native-redash';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Value,
  Clock,
  useCode,
  block,
  cond,
  color as getColor,
  eq,
  set,
  onChange,
  and,
  call,
  not,
  clockRunning,
  interpolate,
  Extrapolate,
  event,
  sub,
} from 'react-native-reanimated';
import {hexToRGB} from './color_converter';
interface SwitchProps {
  onPress: () => void;
  color: string;
  background: string;
}

export default ({
  color = '#00000',
  onPress,
  background: backgroundColor = '#8c8c8c',
}: SwitchProps) => {
  const state = new Value(State.UNDETERMINED);
  const isOn = new Value(0);
  const animate = new Value(0);

  const clock = new Clock();
  const shouldAnimate = new Value(0);
  const width = new Value(0);
  // const gestureEvent = onGestureEvent({state});
  const ba = hexToRGB(backgroundColor);
  const c = hexToRGB(color);

  useCode(() => {
    return block([
      cond(eq(state, State.END), set(shouldAnimate, 1)),
      onChange(state, cond(eq(state, State.END), call([], onPress))),
      cond(and(eq(shouldAnimate, 1), eq(isOn, 0)), [
        set(
          animate,
          timing({
            from: animate,
            to: 1,
            duration: 100,
            easing: Easing.linear,
            clock,
          }),
        ),
        cond(not(clockRunning(clock)), [set(shouldAnimate, 0), set(isOn, 1)]),
      ]),
      cond(and(eq(shouldAnimate, 1), eq(isOn, 1)), [
        set(
          animate,
          timing({
            from: animate,
            to: 0,
            duration: 100,
            easing: Easing.linear,
            clock,
          }),
        ),
        cond(not(clockRunning(clock)), [set(shouldAnimate, 0), set(isOn, 0)]),
      ]),
    ]);
  }, []);

  const translateX = bInterpolate(animate, 0, sub(25, width));
  const background = interpolate(isOn, {
    inputRange: [0, 1],
    outputRange: [getColor(ba.r, ba.g, ba.b), getColor(c.r, c.g, c.b)],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <TapGestureHandler onHandlerStateChange={event([{nativeEvent: {state}}])}>
      <Animated.View
        onLayout={event([
          {
            nativeEvent: {width},
          },
        ])}
        style={styles.defaultStyle}>
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: background,
            opacity: 0.6,
          }}
        />

        <Animated.View style={[styles.circle, {transform: [{translateX}]}]} />
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 33,
    height: 33,
    position: 'absolute',
    left: 1,
    top: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 33 / 2,
  },
  defaultStyle: {
    width: 60,
    height: 35,
    borderRadius: 35 / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
