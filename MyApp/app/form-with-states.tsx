import React, { useState } from 'react';
import { 
  ScrollView,
  View, 
  Text, 
  TextInput, 
  Pressable,
  StyleSheet 
} from 'react-native';

const FormWithStates = () => {
  const [email, setEmail] = useState('emailkhonghople@');
  const [password, setPassword] = useState('mySecurePassword123');

  // Simulate validation states
  const emailHasError = true;  // Hiển thị lỗi email
  const passwordIsValid = true; // Hiển thị thành công password
  const isFormDisabled = true;  // Nút bị vô hiệu hóa

  const handleSubmit = () => {
    // Không làm gì vì nút bị disabled
    console.log('Form submitted');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Header */}
        <Text style={styles.title}>Tạo tài khoản</Text>
        <Text style={styles.subtitle}>Điền thông tin để bắt đầu</Text>

        {/* Email Field - Error State */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[
              styles.input,
              emailHasError && styles.inputError
            ]}
            placeholder="Nhập email của bạn"
            placeholderTextColor="#999999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailHasError && (
            <Text style={styles.errorText}>
              Vui lòng nhập một địa chỉ email hợp lệ
            </Text>
          )}
        </View>

        {/* Password Field - Success State */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={[
              styles.input,
              passwordIsValid && styles.inputSuccess
            ]}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          {passwordIsValid && (
            <Text style={styles.successText}>
              ✓ Mật khẩu đủ mạnh
            </Text>
          )}
        </View>

        {/* Submit Button - Disabled State */}
        <Pressable 
          style={[
            styles.submitButton,
            isFormDisabled && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={isFormDisabled}
        >
          <Text style={[
            styles.submitButtonText,
            isFormDisabled && styles.submitButtonTextDisabled
          ]}>
            Đăng ký
          </Text>
        </Pressable>

        {/* Form States Demo */}
        <View style={styles.statesDemo}>
          <Text style={styles.statesDemoTitle}>Trạng thái hiển thị:</Text>
          
          <View style={styles.stateItem}>
            <View style={[styles.stateIndicator, styles.errorIndicator]} />
            <Text style={styles.stateText}>Email: Lỗi (viền đỏ + thông báo lỗi)</Text>
          </View>
          
          <View style={styles.stateItem}>
            <View style={[styles.stateIndicator, styles.successIndicator]} />
            <Text style={styles.stateText}>Mật khẩu: Thành công (viền xanh lá)</Text>
          </View>
          
          <View style={styles.stateItem}>
            <View style={[styles.stateIndicator, styles.disabledIndicator]} />
            <Text style={styles.stateText}>Nút đăng ký: Vô hiệu hóa (màu xám)</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: '#333333',
  },
  // Error State Styles
  inputError: {
    borderColor: '#FF3B30',
    backgroundColor: '#FFF5F5',
  },
  errorText: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 5,
    marginLeft: 5,
  },
  // Success State Styles
  inputSuccess: {
    borderColor: '#34C759',
    backgroundColor: '#F0FFF4',
  },
  successText: {
    fontSize: 14,
    color: '#34C759',
    marginTop: 5,
    marginLeft: 5,
  },
  // Submit Button Styles
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    boxShadow: '0 4px 8px rgba(0, 122, 255, 0.3)',
    elevation: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#CCCCCC',
    boxShadow: 'none',
    elevation: 0,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  submitButtonTextDisabled: {
    color: '#999999',
  },
  // States Demo Section
  statesDemo: {
    marginTop: 40,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statesDemoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  stateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stateIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  errorIndicator: {
    backgroundColor: '#FF3B30',
  },
  successIndicator: {
    backgroundColor: '#34C759',
  },
  disabledIndicator: {
    backgroundColor: '#CCCCCC',
  },
  stateText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
});

export default FormWithStates;