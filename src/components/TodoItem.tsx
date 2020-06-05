import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from './CheckBox';

interface IProps {
  title: string;
}
const TodoItem: React.FC<IProps> = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleTodoStatus = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <TouchableOpacity activeOpacity={0.3} onPress={toggleTodoStatus}>
      <View style={styles.todoListItem}>
        <CheckBox
          isSelected={isCompleted}
          style={styles.checkBox}
          onPress={toggleTodoStatus}
          text={props.title}
          textStyle={isCompleted ? styles.completed : styles.pending}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoListItem: {
    flexDirection: 'row',
    padding: 8,
    marginVertical: 8,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
  pending: {color: 'black'},
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default TodoItem;
