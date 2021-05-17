import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const CheckingAppliedOrNot = ({route,navigation}) => {
    const seekerDetails=route.params
    const auth=useSelector(state=>state.auth1)
    console.log("checking",seekerDetails)
    useEffect(()=>{
        const ask=()=>{
            if(auth.already==="jobseeker already applied a job"){
                return [navigation.navigate('already')]
            }else{
                return [navigation.navigate('after',seekerDetails)]
            }
        }
        ask()
    },[])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default CheckingAppliedOrNot
