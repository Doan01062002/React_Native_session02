import React, { useState, useRef } from 'react';
import { 
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

interface Message {
  id: number;
  text: string;
  isOwn: boolean; // true nếu là tin nhắn của mình, false nếu là của người khác
}

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  
  // Hardcode các tin nhắn mẫu
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Chào cậu, cậu khỏe không?', isOwn: false },
    { id: 2, text: 'Tớ khỏe, cảm ơn cậu. Còn cậu thì sao?', isOwn: true },
    { id: 3, text: 'Tớ cũng ổn. Đang làm gì đó?', isOwn: false },
    { id: 4, text: 'Tớ đang học React Native, khá là thú vị đó!', isOwn: true },
  ]);

  // Hàm gửi tin nhắn
  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message.trim(),
        isOwn: true
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Cuộn xuống cuối sau khi gửi tin nhắn
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Chat</Text>
        </View>

        {/* Danh sách tin nhắn */}
        <ScrollView 
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View 
              key={msg.id}
              style={[
                styles.messageWrapper,
                msg.isOwn ? styles.ownMessageWrapper : styles.otherMessageWrapper
              ]}
            >
              <View 
                style={[
                  styles.messageBubble,
                  msg.isOwn ? styles.ownMessage : styles.otherMessage
                ]}
              >
                <Text 
                  style={[
                    styles.messageText,
                    msg.isOwn ? styles.ownMessageText : styles.otherMessageText
                  ]}
                >
                  {msg.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input area cố định phía dưới */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nhắn tin..."
            placeholderTextColor="#999999"
            value={message}
            onChangeText={setMessage}
            multiline={true}
            maxLength={500}
          />
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={sendMessage}
            activeOpacity={0.7}
          >
            <Text style={styles.sendButtonText}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  messagesContent: {
    paddingVertical: 15,
  },
  messageWrapper: {
    marginBottom: 10,
  },
  ownMessageWrapper: {
    alignItems: 'flex-end',
  },
  otherMessageWrapper: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  ownMessage: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 5,
  },
  otherMessage: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  ownMessageText: {
    color: '#ffffff',
  },
  otherMessageText: {
    color: '#333333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
    marginRight: 10,
    backgroundColor: '#f8f8f8',
    color: '#333333',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChatInterface;