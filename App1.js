import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text ,Dimensions,StyleSheet, TouchableOpacity} from 'react-native'

const width=Dimensions.get('window').width/2-30;
const styles=StyleSheet.create({
    card:{
        height: 225, backgroundColor: '#F1F1F1', 
        width, marginHorizontal: 2, 
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    }
})
const App1 = ({plant,navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('View',plant)}>
        <View>
        <View style={styles.card}>
            {/* <Text >{plant.jobid}</Text> */}
            <Text >job title:{plant.jobtitle}</Text>
            <Text >companyname :{plant.companyname}</Text>
            <Text >description :{plant.description}</Text>
            {/* <Text >recruiter name :{plant.name}</Text>
            <Text >email:{plant.email}</Text>

            
            <Text >jobtype :{plant.jobtype}</Text>
            <Text >salary :{plant.salary}</Text>
            <Text >experience :{plant.exp}</Text>
            <Text >location :{plant.location}</Text> */}

            </View>
        </View>
        </TouchableOpacity>
    )
}

export default App1
