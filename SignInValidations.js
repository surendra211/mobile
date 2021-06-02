import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const SignInValidations = ({navigation,j}) => {
    const auth=useSelector(state=>state.auth1)
    const s={message:'Invalid Email id or Password'}
    console.log('hello')
    useEffect(()=>{
        const d=()=>{
        if(auth.fail){
            return [navigation.navigate('Details')]
        }else{
           console.log(auth.fail)
            return [navigation.navigate('signin',s)]
        }
    }
    d()
    },[])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default SignInValidations
