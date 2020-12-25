import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {
  //console.log(props);
  return (
          <View><Text style={styles.text}>Hi hi!</Text>
          <Button 
          onPress={()=> navigation.navigate('Components')}
          title="Go To components demo"/>
          <Button
            title="Go to List Demo"
            onPress={()=>navigation.navigate('Lists')}
            />
          <Button
            title="Go to Image Demo"
            onPress={()=>navigation.navigate('Image')}
            />
          <Button
            title="Go to Counter Demo"
            onPress={()=>navigation.navigate('Counter')}
            />
          <Button
            title="Go to Color Demo"
            onPress={()=>navigation.navigate('Color')}
            />
          <Button
            title="Go to Square Demo"
            onPress={()=>navigation.navigate('Square')}
            />
          
         </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


