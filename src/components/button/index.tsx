import React, {ReactElement, ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
  Image,
  StyleSheet,
  ViewStyle,
  ImageProps,
  ImageStyle,
  ImageRequireSource,
  Dimensions,
} from 'react-native';

type IProps = {
  children?: ReactNode;
  disabled?: boolean;
  icon?: boolean;
  source?: ImageRequireSource;
  styleIcon?: ImageStyle;
  styleButton?: ViewStyle | (false | ViewStyle)[];
  styleText?: TextStyle;
  isBlocked?: boolean;
} & TouchableOpacityProps;

const ButtonIcon = (props: IProps & ImageProps): ReactElement => {
  const {source, styleIcon} = props;
  return <Image source={source} style={[styles.icon, styleIcon]} />;
};

export const StyledButton = (props: IProps): ReactElement => {
  const {
    onPress,
    children,
    disabled,
    source = 0,
    styleIcon,
    styleButton,
    styleText,
    icon = false,
    isBlocked = false,
  } = props;

  return (
    <TouchableOpacity
      onPress={!isBlocked ? onPress : (): void => {}}
      style={[
        styles.button,
        styleButton,
        (disabled || isBlocked) && styles.buttonDisabled,
      ]}>
      {icon ? <ButtonIcon source={source} styleIcon={styleIcon} /> : null}
      <Text style={[styles.text, styleText]}>{children}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  button: ViewStyle;
  text: TextStyle;
  icon: ImageStyle;
  buttonDisabled: ViewStyle;
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  button: {
    borderRadius: 16,
    backgroundColor: 'red',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: width * 0.36,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  buttonDisabled: {
    backgroundColor: '#7a7a7a',
  },
});
