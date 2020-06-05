import * as React from 'react';

import {
  TouchableOpacity,
  Text,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface IProps {
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  text: string;
}
const CheckBox: React.FC<IProps> = (props) => {
  return (
    <TouchableOpacity
      style={[props.style, styles.mainStyle]}
      onPress={props.onPress}
      {...props}>
      <Text style={props.textStyle}> {props.text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
  },
});
export default CheckBox;
