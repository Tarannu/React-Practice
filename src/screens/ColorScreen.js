import React,{useState} from "react";
import { Text, StyleSheet, View,Button,FlatList } from "react-native";
//mport { Colors } from "react-native/Libraries/NewAppScreen";

const ColorScreen=()=>{
    const[color,setColors]=useState([]);
    
    return <View>
    <Button title = "add a color" onPress={()=>{
        setColors([...color,randomRgb()]);
    }} />
     
    <FlatList 
        keyExtractor={(item=>item)}
        data={color}
        renderItem={({item})=>{
            return <View style={{height:100,width:100,backgroundColor:item}}/>
        }}
    />
    </View>
    
};
const randomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;

};

const styles=StyleSheet.create({

});

export default ColorScreen;