import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputUI = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Nhãn cho ô nhập liệu */}
        <Text style={styles.label}>Họ và tên:</Text>
        
        {/* Ô nhập liệu */}
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tên của bạn..."
          placeholderTextColor="#999999"
          value={name}
          onChangeText={setName}
        />
        
        {/* Hiển thị giá trị đã nhập (tùy chọn để demo) */}
        {name.length > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Bạn đã nhập:</Text>
            <Text style={styles.resultText}>{name}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 15,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#333333',
    // Focus state styling
    // Note: React Native không hỗ trợ :focus CSS, cần xử lý bằng onFocus/onBlur
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  resultLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});

export default TextInputUI;