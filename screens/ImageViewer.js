import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { CATEGORIES } from "../assets/constants/data";
import { useNavigation } from "@react-navigation/native";

const ImageViewerScreen = ({ route }) => {
  const { productId, categoryId } = route.params;
  const [imageUrls, setImageUrls] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (!category) return;

    const urls = category.products.map((product) => ({
      url: "",
      props: {
        source: product.imgUrl, // local require(...) or remote uri
      },
    }));

    setImageUrls(urls);

    const startIndex = category.products.findIndex((p) => p.id === productId);
    setInitialIndex(startIndex >= 0 ? startIndex : 0);
  }, [productId, categoryId]);

  if (imageUrls.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <ImageViewer
        imageUrls={imageUrls}
        index={initialIndex} // this opens the selected product image
        backgroundColor="black"
        enableSwipeDown
        onSwipeDown={() => navigation.goBack()}
        loadingRender={() => <ActivityIndicator size="large" color="#fff" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default ImageViewerScreen;
