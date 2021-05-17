import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
//import {createAppContainer} from 'react-navigation'
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
const AppHeader=({navigation})=> {
    return (
        <View style={{backgroundColor:'purple', height:50,justifyContent:'space-between', alignItems:'center',flexDirection:'row'}}>
        <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:7,
       marginLeft:10}}>Job Application</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
    )
}

export default AppHeader
