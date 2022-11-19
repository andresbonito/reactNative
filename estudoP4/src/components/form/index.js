import React, {useState} from "react";
import { View, Text, TextInput, Button} from "react-native"
import ResultMedia from "./resultado";

export default function Form(){

const [nota1, setNota1]= useState(null)
const [nota2, setNota2]= useState(null)
const [messageMedia, setMessageMedia]= useState("Preencha as notas:")
const [media, setMedia]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function mediaCalculator(){
    return setMedia(((nota1/2) + (nota2/2)).toFixed(2))
}

function validationMedia(){
    if(nota1 != null && nota2 != null){
        mediaCalculator()
        setNota1(null)
        setNota2(null)
        setMessageMedia("Sua média é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("Preencha as notas")
}

    return(
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput
                    onChangeText={setNota1}
                    value={nota1}
                    placeholder="Ex. 6.00"
                    keyboardType="numeric"
                />

                <Text>Nota 2</Text>
                <TextInput
                    onChangeText={setNota2}
                    value={nota2}
                    placeholder="Ex. 6.00"
                    keyboardType="numeric"
                />

                <Button
                    onPress={() => validationMedia()}
                    title={textButton}
                />
            </View>
            <ResultMedia messageMedia={messageMedia} ResultMedia={media} />
        </View>
    );
}