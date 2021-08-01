import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CarStyles from './carStyles'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props) => {
    return (
        <View style={CarStyles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList;