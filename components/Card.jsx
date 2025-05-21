import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Card = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress?.(product)}>
      <Image source={product.imgUrl} style={styles.image} />
      <Text style={styles.label}>{product.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%", // use '48%' inside a grid for 2-column layout
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    resizeMode: "contain",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },
});

export default Card;
