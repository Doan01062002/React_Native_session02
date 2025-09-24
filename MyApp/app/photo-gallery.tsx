import React from 'react';
import { 
  ScrollView,
  View, 
  Text, 
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';

const PhotoGallery = () => {
  // Lấy kích thước màn hình để tính toán kích thước ảnh
  const screenWidth = Dimensions.get('window').width;
  const padding = 20;
  const gap = 10;
  const imageSize = (screenWidth - padding * 2 - gap * 2) / 3; // Chia đều cho 3 cột

  // Danh sách ID ảnh từ picsum.photos
  const photoIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];

  // Hàm xử lý khi bấm vào ảnh
  const handleImagePress = (imageId: number) => {
    Alert.alert('Ảnh được chọn', `Bạn đã chọn ảnh ID: ${imageId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thư viện ảnh</Text>
      <Text style={styles.subtitle}>Lưới ảnh 3 cột</Text>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.gridContainer}>
          {photoIds.map((id) => (
            <TouchableOpacity
              key={id}
              style={[styles.imageContainer, { width: imageSize, height: imageSize }]}
              onPress={() => handleImagePress(id)}
              activeOpacity={0.8}
            >
              <Image
                source={{ 
                  uri: `https://picsum.photos/200/200?random=${id}` 
                }}
                style={styles.image}
                resizeMode="cover"
              />
              
              {/* Overlay với số ID ảnh */}
              <View style={styles.overlay}>
                <Text style={styles.imageId}>{id}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
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
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    position: 'relative',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  imageId: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PhotoGallery;