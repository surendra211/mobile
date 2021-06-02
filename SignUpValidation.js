import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const SignUpValidation = ({navigation,j}) => {
    const auth=useSelector(state=>state.auth1)
    const s1={message:'Email Id Already Registered'}
    const s={message:''}
    useEffect(()=>{
        const k=()=>{
            if(auth.register){
                console.log(auth.register)
                return [navigation.navigate('signup',s1)]
            }else{
                return [navigation.navigate('signin',s)]
            }
        }
        k();
    },[])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default SignUpValidation
