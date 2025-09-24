import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  ScrollView, 
  StyleSheet 
} from 'react-native';

const TodoListUI = () => {
  const [newTodo, setNewTodo] = useState('');
  
  // Hardcode danh sách công việc ban đầu
  const [todos, setTodos] = useState([
    'Học React Native Styling',
    'Làm bài tập về ScrollView',
    'Tìm hiểu về component Pressable',
    'Chuẩn bị cho dự án cuối kỳ',
    'Đọc sách chuyên ngành 30 phút'
  ]);

  // Hàm thêm công việc mới
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  // Màu sắc cho các item (xoay vòng)
  const itemColors = ['#e3f2fd', '#f3e5f5', '#e8f5e8', '#fff3e0', '#fce4ec'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>
      
      {/* Input và nút thêm */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập công việc mới..."
          placeholderTextColor="#999999"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Pressable 
          style={({ pressed }) => [
            styles.addButton,
            { opacity: pressed ? 0.7 : 1 }
          ]}
          onPress={addTodo}
        >
          <Text style={styles.addButtonText}>Thêm</Text>
        </Pressable>
      </View>

      {/* Danh sách công việc */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
      >
        {todos.map((todo, index) => (
          <View 
            key={index}
            style={[
              styles.todoItem,
              { backgroundColor: itemColors[index % itemColors.length] }
            ]}
          >
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333333',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  todoItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 22,
  },
});

export default TodoListUI;