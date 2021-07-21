import React from "react";
import { View, Text, Image } from "react-native";

import wateringImg from '../assets/watering.png';

export function Welcome(){
    return(
        <View>
            <Text>
                Hello World!!
            </Text>
            <Image source={wateringImg} />
        </View>
    )

}