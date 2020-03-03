import {StyleSheet} from 'react-native';
import {Colors, IS_ANDROID, Typography, Spacing} from '../metrics';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerIcon: {
    width: Spacing.SIZE_50,
    height: Spacing.SIZE_50,
    borderRadius: Spacing.SIZE_25,
    justifyContent: 'center',
    alignItems: 'center',
    left: Spacing.SIZE_12,
  },
  topContainer: {
    alignSelf: 'stretch',
    height: Spacing.SIZE_60,
    borderRadius: Spacing.SIZE_20,
    backgroundColor: Colors.LIGHT_BLUE,
    marginHorizontal: Spacing.SIZE_40,
    marginTop: Spacing.SIZE_40,
    marginBottom: Spacing.SIZE_16,

    flexDirection: 'row',
    paddingHorizontal: Spacing.SIZE_20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    alignSelf: 'stretch',
  },
  insideList: {
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.SIZE_30,
    paddingBottom: Spacing.SIZE_20,
    paddingTop: Spacing.SIZE_30,
  },
  messageText: {
    color: Colors.LIGHT_TEXT,
  },
  listContent: {
    paddingTop: Spacing.SIZE_6,
  },
  inner: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerSelf: {
    marginTop: Spacing.SIZE_20,
    height: Spacing.SIZE_50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    width: Spacing.SIZE_50,
    height: Spacing.SIZE_50,
    borderRadius: Spacing.SIZE_15,
  },
  position: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.LIGHTER_TEXT,
  },
  sender: {
    color: 'black',
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: IS_ANDROID ? 'bold' : '600',
  },
  info: {
    height: '100%',
    marginLeft: Spacing.SIZE_20,
    justifyContent: 'space-evenly',
  },
  time: {
    fontSize: Typography.FONT_SIZE_12,
    color: 'black',
    fontWeight: IS_ANDROID ? 'bold' : '600',
  },
  separator: {
    alignSelf: 'stretch',
    height: 0.5,
    opacity: 0.6,
    backgroundColor: Colors.LIGHTER_TEXT,
    marginHorizontal: Spacing.SIZE_30,
  },
  addButton: {
    width: Spacing.SIZE_50,
    height: Spacing.SIZE_50,
    position: 'absolute',
    bottom: Spacing.SIZE_16,
    right: Spacing.SIZE_16,
    borderRadius: Spacing.SIZE_25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
});
