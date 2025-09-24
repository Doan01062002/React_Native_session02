import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      {/* Số hiển thị ở giữa màn hình */}
      <Text style={styles.countText}>{count}</Text>
      
      {/* Container chứa 2 nút */}
      <View style={styles.buttonContainer}>
        {/* Nút Giảm */}
        <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrement}>
          <Text style={styles.buttonText}>GIẢM</Text>
        </TouchableOpacity>
        
        {/* Nút Tăng */}
        <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={increment}>
          <Text style={styles.buttonText}>TĂNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    padding: 20,
  },
  countText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // Khoảng cách giữa 2 nút
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrementButton: {
    backgroundColor: '#ff5555', // Màu đỏ cho nút Giảm
  },
  incrementButton: {
    backgroundColor: '#55aa55', // Màu xanh lá cho nút Tăng
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Counter;