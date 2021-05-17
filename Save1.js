import React from 'react'
import { View, Text,Dimensions,StyleSheet } from 'react-native'


const width=Dimensions.get('window').width/2-30;
const styles=StyleSheet.create({
    card:{
        height: 225, backgroundColor: '#F1F1F1', 
        width, marginHorizontal: 2, 
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    }
})
const Save1 = ({plant}) => {
    return (
        <View style={styles.card}>
            <Text>{plant.jobtitle}</Text>
            <Text>{plant.companyname}</Text>
            <Text>{plant.description}</Text>
        </View>
    )
}

export default Save1
