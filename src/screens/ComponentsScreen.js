import React from "react";
import { Text, StyleSheet } from "react-native";
//Text is a primitive react element
//view allows us to show general grouping eleent and provide styling to them


const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the component screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;


