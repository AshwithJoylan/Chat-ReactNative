import {StyleSheet} from 'react-native';
import {Spacing, Colors, Typography} from '../metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.SIZE_40,
  },
  logo: {
    width: Spacing.SIZE_100,
    height: Spacing.SIZE_100,
    marginBottom: Spacing.SIZE_60,
  },
  textInput: {
    alignSelf: 'stretch',
    height: Spacing.SIZE_50,
    marginTop: Spacing.SIZE_20,
    borderWidth: 0.5,
    paddingHorizontal: Spacing.SIZE_12,
    borderRadius: Spacing.SIZE_10,
    borderColor: Colors.LIGHT_TEXT,
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: Spacing.SIZE_50,
    borderRadius: Spacing.SIZE_10,
    marginTop: Spacing.SIZE_20,
    backgroundColor: Colors.PRIMARY,
  },
  loginText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  bottom: {
    alignSelf: 'stretch',
    marginTop: Spacing.SIZE_10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    overflow: 'hidden',
    paddingHorizontal: Spacing.SIZE_6,
    paddingVertical: Spacing.SIZE_4,
    borderRadius: Spacing.SIZE_4,
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.LIGHT_TEXT,
  },
});
