import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import Button from '../StyleButton/button'

const carItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>
            <Button type={'primary'}
                content={'Custom Order'}
                onPress={() => {
                    console.warn("Custom order was pressed")
                }} />
            <Button type={'secondary'}
                content={'Existing Inventory'}
                onPress={() => {
                    console.warn("Existing Inventory was pressed")
                }} />
        </View>
    )
}

export default carItem;