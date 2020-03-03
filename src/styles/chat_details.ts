import {StyleSheet} from 'react-native';
import {Colors, Sizes, IS_ANDROID, Spacing, Typography} from '../metrics';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignSelf: 'stretch',
    paddingTop: Sizes.TOP && Sizes.TOP + 10,
    paddingBottom: Spacing.SIZE_10,
    flexDirection: 'row',
  },
  headerIcon: {
    width: Spacing.SIZE_50,
    height: Spacing.SIZE_50,
    borderRadius: Spacing.SIZE_25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: Spacing.SIZE_10,
    height: Spacing.SIZE_50,
    flexDirection: 'row',
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
  contentContainer: {
    paddingVertical: Spacing.SIZE_20,
    paddingHorizontal: Spacing.SIZE_20,
    paddingBottom: Spacing.SIZE_70,
  },
  separator: {
    height: Spacing.SIZE_15,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginHorizontal: Spacing.SIZE_20,
    height: Spacing.SIZE_60,
    position: 'absolute',
    bottom: Spacing.SIZE_10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.SIZE_20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
  },
  input: {
    color: Colors.LIGHT_TEXT,
    paddingLeft: Spacing.SIZE_20,
    height: '100%',
    flex: 1,
    fontSize: Typography.FONT_SIZE_16,
  },
  button: {
    width: Spacing.SIZE_60,
    height: Spacing.SIZE_60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
