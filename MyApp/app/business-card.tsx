import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const BusinessCard = () => {
  const screenWidth = Dimensions.get('window').width;
  
  return (
    <View style={styles.container}>
      <View style={[styles.card, { width: screenWidth * 0.85 }]}>
        {/* Ảnh đại diện */}
        <Image
          source={{ uri: 'https://fastly.picsum.photos/id/485/100/100.jpg?hmac=ybyMzdLx5nwRmJ8nGEHmLCRShOQiCR614gMH7Nm9y1c' }} 
          style={styles.profileImage}
        />
        
        {/* Tên */}
        <Text style={styles.name}>Nguyễn Văn A</Text>
        
        {/* Mô tả  1234*/}
        {/* Mô tả  1235*/}
        <Text style={styles.description}>React Native Developer | UI/UX Enthusiast</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
    elevation: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#e0e0e0',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default BusinessCard;