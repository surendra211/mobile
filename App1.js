import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text ,Dimensions,StyleSheet, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient'
const width=Dimensions.get('window').width-20
const styles=StyleSheet.create({
   
    card:{
        height: 150, backgroundColor: 'white',marginLeft:10,marginRight:0,
        flexDirection:'column',flex:1,justifyContent:'center', 
        width, marginHorizontal: 2,
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
      },
      button:{
        alignItems:'flex-end',
        marginTop:0
      },
      textSign:{
        color:'white',
        fontWeight:'bold'
      }
})
const App1 = ({plant,navigation}) => {
    return (
        <View style={[styles.card]}>
       
        <View>
        
            {/* <Text >{plant.jobid}</Text> */}
            <Text style={{color:'#009387',fontSize:17}}>job title:{plant.jobtitle}</Text>
            <Text >companyname :{plant.companyname}</Text>
            <Text >description :{plant.description}</Text>
            <View style={styles.button}>
            <TouchableOpacity  onPress={()=>navigation.navigate('View',plant)}>
            <LinearGradient
          colors={['#08d4c4', '#01ab9d']}
          style={styles.signIn}
          >
            <Text style={styles.textSign}>View</Text>
            <MaterialIcons  name='navigate-next' color='#fff'
            size={20}/>
          </LinearGradient>
          </TouchableOpacity>
          </View>
            {/* <Text >recruiter name :{plant.name}</Text>
            <Text >email:{plant.email}</Text>

            
            <Text >jobtype :{plant.jobtype}</Text>
            <Text >salary :{plant.salary}</Text>
            <Text >experience :{plant.exp}</Text>
            <Text >location :{plant.location}</Text> */}

            </View>
        
        
        </View>
    )
}

export default App1
