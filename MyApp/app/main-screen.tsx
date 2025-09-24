import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BusinessCard from './business-card';
import Counter from './counter';
import TextInputUI from './text-input-ui';
import TermsOfService from './terms-of-service';
import LoginScreen from './login-screen';
import TodoListUI from './todo-list-ui';
import ChatInterface from './chat-interface';
import ButtonKit from './button-kit';
import PhotoGallery from './photo-gallery';
import FormWithStates from './form-with-states';

const MainScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('form-with-states'); // Mặc định hiển thị Form With States

  const renderScreen = () => {
    switch (currentScreen) {
      case 'business-card':
        return <BusinessCard />;
      case 'counter':
        return <Counter />;
      case 'text-input':
        return <TextInputUI />;
      case 'terms-of-service':
        return <TermsOfService />;
      case 'login-screen':
        return <LoginScreen />;
      case 'todo-list':
        return <TodoListUI />;
      case 'chat-interface':
        return <ChatInterface />;
      case 'button-kit':
        return <ButtonKit />;
      case 'photo-gallery':
        return <PhotoGallery />;
      case 'form-with-states':
        return <FormWithStates />;
      default:
        return <FormWithStates />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.navigationContainer}
        contentContainerStyle={styles.navigationContent}
      >
        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'business-card' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('business-card')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'business-card' && styles.activeNavButtonText
          ]}>
            Bài 1: Danh thiếp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'counter' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('counter')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'counter' && styles.activeNavButtonText
          ]}>
            Bài 2: Đếm số
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'text-input' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('text-input')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'text-input' && styles.activeNavButtonText
          ]}>
            Bài 3: TextInput
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'terms-of-service' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('terms-of-service')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'terms-of-service' && styles.activeNavButtonText
          ]}>
            Bài 4: ScrollView
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'login-screen' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('login-screen')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'login-screen' && styles.activeNavButtonText
          ]}>
            Bài 5: Login Screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'todo-list' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('todo-list')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'todo-list' && styles.activeNavButtonText
          ]}>
            Bài 6: Todo List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'chat-interface' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('chat-interface')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'chat-interface' && styles.activeNavButtonText
          ]}>
            Bài 7: Chat UI
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'button-kit' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('button-kit')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'button-kit' && styles.activeNavButtonText
          ]}>
            Bài 8: Button Kit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'photo-gallery' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('photo-gallery')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'photo-gallery' && styles.activeNavButtonText
          ]}>
            Bài 9: Photo Gallery
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'form-with-states' && styles.activeNavButton
          ]}
          onPress={() => setCurrentScreen('form-with-states')}
        >
          <Text style={[
            styles.navButtonText,
            currentScreen === 'form-with-states' && styles.activeNavButtonText
          ]}>
            Bài 10: Form States
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Screen content */}
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navigationContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  navigationContent: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    minWidth: 120,
  },
  activeNavButton: {
    backgroundColor: '#007AFF',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  activeNavButtonText: {
    color: '#ffffff',
  },
  screenContainer: {
    flex: 1,
  },
});

export default MainScreen;