import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // add this at the top
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  Modal,
  Image,
} from "react-native";
import SideBar from "../components/Sidebar";
import Card from "../components/Card";
import { Platform, StatusBar } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleCardPress = (product) => {
    // setSelectedImage(product.imgUrl);
    // setModalVisible(true);
    navigation.navigate("ImageViewer", {
      productId: product.id,
      categoryId: selectedCategory.id,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>
            {selectedCategory?.categorie || "Merci de choisir une catégorie"}
          </Text>

          {selectedCategory?.products?.length ? (
            <View style={styles.grid}>
              {selectedCategory.products.map((product, index) => (
                <Card key={index} product={product} onPress={handleCardPress} />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>Aucun produit à afficher.</Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.sidebar}>
        <SideBar onSelectCategory={setSelectedCategory} />
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <Pressable
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          <Image
            source={selectedImage}
            style={styles.fullImage}
            resizeMode="contain"
          />
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 4,
    backgroundColor: "#f9f9f9",
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  sidebar: {
    width: 80,
    backgroundColor: "#ffffff",
    borderLeftWidth: 1,
    borderLeftColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "90%",
    height: "90%",
  },
});

export default Home;
