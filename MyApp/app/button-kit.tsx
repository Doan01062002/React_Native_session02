import React from 'react';
import { 
  View, 
  Text, 
  Pressable,
  StyleSheet,
  Alert 
} from 'react-native';

interface CustomButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  variant = 'primary', 
  disabled = false, 
  onPress 
}) => {
  const getButtonStyle = () => {
    if (disabled) {
      return [styles.button, styles.disabledButton];
    }
    
    switch (variant) {
      case 'secondary':
        return [styles.button, styles.secondaryButton];
      case 'danger':
        return [styles.button, styles.dangerButton];
      default: // primary
        return [styles.button, styles.primaryButton];
    }
  };

  const getTextStyle = () => {
    if (disabled) {
      return [styles.buttonText, styles.disabledButtonText];
    }
    
    switch (variant) {
      case 'secondary':
        return [styles.buttonText, styles.secondaryButtonText];
      default: // primary và danger đều dùng text trắng
        return [styles.buttonText, styles.primaryButtonText];
    }
  };

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <Pressable 
      style={({ pressed }) => [
        ...getButtonStyle(),
        pressed && !disabled && styles.pressedButton
      ]}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
};

const ButtonKit = () => {
  const handleButtonPress = (buttonType: string) => {
    Alert.alert('Button Pressed', `Bạn đã bấm ${buttonType}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bộ sưu tập nút</Text>
      
      <View style={styles.buttonsContainer}>
        {/* Nút Primary */}
        <CustomButton 
          title="Button Primary"
          variant="primary"
          onPress={() => handleButtonPress('Button Primary')}
        />
        
        {/* Nút Secondary */}
        <CustomButton 
          title="Button Secondary"
          variant="secondary"
          onPress={() => handleButtonPress('Button Secondary')}
        />
        
        {/* Nút Danger */}
        <CustomButton 
          title="Button Danger"
          variant="danger"
          onPress={() => handleButtonPress('Button Danger')}
        />
        
        {/* Nút Disabled */}
        <CustomButton 
          title="Button Disabled"
          variant="primary"
          disabled={true}
          onPress={() => handleButtonPress('Button Disabled')}
        />
      </View>
      
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    gap: 15,
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  // Primary Button Styles
  primaryButton: {
    backgroundColor: '#007AFF',
    boxShadow: '0 4px 8px rgba(0, 122, 255, 0.3)',
    elevation: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Secondary Button Styles
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  // Danger Button Styles
  dangerButton: {
    backgroundColor: '#FF3B30',
    boxShadow: '0 4px 8px rgba(255, 59, 48, 0.3)',
    elevation: 8,
  },
  // Disabled Button Styles
  disabledButton: {
    backgroundColor: '#CCCCCC',
    boxShadow: 'none',
    elevation: 0,
  },
  disabledButtonText: {
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
  },
  // Common button text styles
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  // Pressed state
  pressedButton: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  // Description section
  descriptionContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 5,
  },
});

export default ButtonKit;