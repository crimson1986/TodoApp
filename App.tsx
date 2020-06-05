import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import TodoItem from './src/components/TodoItem';
import TodoInput from './src/components/TodoInput';
import {SafeAreaView} from 'react-native';
import {ITodo} from 'src/types/Interfaces';

export default function App() {
  const [todoListItems, setTodoListItems] = useState<ITodo[]>([]);

  const addTodoHandler = (todo: ITodo) => {
    setTodoListItems((todoItems) => [...todoItems, todo]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <TodoInput onAddTodo={addTodoHandler} />
        <FlatList
          keyExtractor={(item, index) => `key-${index}`}
          data={todoListItems}
          renderItem={(itemData) => <TodoItem title={itemData.item.value} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  safeArea: {
    flex: 1,
  },
});
