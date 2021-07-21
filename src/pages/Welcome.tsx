import React from "react";
import { SafeAreaView, Text, Image , TouchableOpacity, StyleSheet} from "react-native";

import wateringImg from '../assets/watering.png';
import colors from "../styles/colors";
import { Button } from "../components/Button"; 

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Hello World!!
            </Text>
            <Image source={wateringImg} />
            
            <Button title="Avançar" />
        </SafeAreaView>

       
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})