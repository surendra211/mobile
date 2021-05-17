import React from 'react'
import { View, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
const JobView = ({route,navigation}) => {
    const job=route.params
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
             <Icon style={{marginLeft:-380,marginTop:10}} name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> 
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Applied Job Details :</Text>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Text>jobtitle :</Text>
            <Text>{job.jobtitle}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>companyname :</Text>
            <Text>{job.companyname}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>name :</Text>
            <Text>{job.name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Email :</Text>
            <Text>{job.email}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>description :</Text>
            <Text>{job.description}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Salary :</Text>
            <Text>{job.salary}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>jobtype :</Text>
            <Text>{job.jobtype}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>location :</Text>
            <Text>{job.location}</Text>
            </View>
        </View>
    )
}

export default JobView
