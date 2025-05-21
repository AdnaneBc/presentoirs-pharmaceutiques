import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { CATEGORIES } from "../assets/constants/data";

function SideBar({ onSelectCategory }) {
  const selectCategoryHandler = (id) => {
    const selectedCategory = CATEGORIES.find((category) => category.id === id);
    onSelectCategory(selectedCategory);
  };

  return (
    <View style={styles.sidebar}>
      {CATEGORIES.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.sidebarItem, { backgroundColor: category.color }]}
          onPress={() => selectCategoryHandler(category.id)}
          accessibilityLabel={`Category: ${category.categorie}`}
        >
          <Text style={styles.verticalText}>{category.categorie}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 90,
    flex: 1,
  },
  sidebarItem: {
    flex: 1, // Equal height for each category
    justifyContent: "center",
    alignItems: "center",
  },
  verticalText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    transform: [{ rotate: "90deg" }],
    textAlign: "center",
    width: 100, // Helps with layout after rotation
  },
});

export default SideBar;
