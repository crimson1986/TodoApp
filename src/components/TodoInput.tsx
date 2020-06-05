import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {ITodo} from 'src/types/Interfaces';

interface IProps {
  onAddTodo: (addedTodo: ITodo) => void;
}

const TodoInput: React.FC<IProps> = (props) => {
  const [enterTodo, setEnterTodo] = useState<string>('');

  const todoInputHandler = (enteredText: string) => {
    setEnterTodo(enteredText);
  };

  const addTodo = () => {
    if (enterTodo.length <= 0) {
      Alert.alert('Required', 'Please enter todo details.', [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }
    var todo = {
      key: randomId(),
      value: enterTodo,
    };
    props.onAddTodo(todo);

    clearField();
  };

  const randomId = () => {
    return (Math.random().toString(16) + '000000000').substr(2, 8);
  };

  const clearField = () => {
    setEnterTodo('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Todo"
        style={styles.input}
        onChangeText={todoInputHandler}
        value={enterTodo}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});
export default TodoInput;
