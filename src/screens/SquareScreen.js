import React,{useState} from "react";
import { Text, StyleSheet, View,Button} from "react-native";
import ColorCounter from '../components/ColorCounter'

const Color_Increement=15;
const SquareScreen=()=>{
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    
    const setColor=(color,change)=>{
        switch(color){
            case 'red':
            red+change>255 || red+change<0 ? null : setRed(red+change);
            return
            case 'blue':
            blue+change>255 || blue+change<0 ? null : setBlue(blue+change);
            return
            case 'green':
            green+change>255 || green+change<0 ? null : setGreen(green+change);
            return
            default:
                return
        
        }
    };

    return (
        <View>
        <ColorCounter color="Red"
            onIncrease={()=>setColor('red',Color_Increement)}
            onDecrease={()=>setColor('red',-1*Color_Increement)}
        />
        <ColorCounter color="Blue"
            onIncrease={()=>setColor(blue,Color_Increement)}
            onDecrease={()=>setColor(blue,-1*Color_Increement)}
        />
        <ColorCounter color="Green"
            onIncrease={()=>setColor(green,Color_Increement)}
            onDecrease={()=>setColor(green,-1*Color_Increement)}
        />
        <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );

};

const styles=StyleSheet.create({

});



export default SquareScreen;