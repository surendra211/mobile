import React from 'react'
import { View, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const Already = ({navigation}) => {
    return (
        <View>
            <Icon name="arrow-back" size={28} onPress={()=>navigation.navigate('Home')} color='black' />
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:300}}>
            <Text style={{color:'red'}}>Already You Applied for this job</Text>
        </View>
        </View>
    )
}

export default Already
