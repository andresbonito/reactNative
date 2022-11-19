import React from "react";
import { View, Text } from "react-native"

export default function ResultMedia(props){
    return(
        <View>
            <Text>{props.messageMedia}</Text>
            <Text>{props.ResultMedia}</Text>
        </View>
    );
}