import React from 'react'
import { View, Text, Pressable } from 'react-native'
import buttonStyle from './style'

const Button = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    // better way to write above three lines 
    const { type, content, onPress } = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const fontColor = type === 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={buttonStyle.container}>
            <Pressable style={[buttonStyle.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[buttonStyle.text, { color: fontColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default Button;