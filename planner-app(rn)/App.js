import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState({});

  const showOthers = () => setWorking(false);
  const showWork = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addTodo = () => {
    if (text === '') return;

    const newTodos = {
      ...todos,
      [Date.now()]: { text, working, done: false },
    };
    setTodos(newTodos);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={showWork}>
          <Text
            style={{
              ...styles.header_btn,
              color: working ? 'white' : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showOthers}>
          <Text
            style={{
              ...styles.header_btn,
              color: !working ? 'white' : theme.grey,
            }}
          >
            Others
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={addTodo}
        placeholder="Add a To Do"
        value={text}
        returnKeyType="done"
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(todos).map((key) => {
          return todos[key].working === working ? (
            <View key={key} style={styles.todo}>
              <Text style={styles.todo_text}>{todos[key].text}</Text>
            </View>
          ) : null;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  header_btn: {
    fontSize: 32,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 16,
  },
  todo: {
    backgroundColor: theme.todoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  todo_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
