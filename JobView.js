import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
const JobView = ({route,navigation}) => {
    const job=route.params
    return (
        <View style={{justifyContent:'center',marginLeft:10,marginRight:10,marginTop:10,
        alignItems:'center',flex:1,marginBottom:10,
        
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 62,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,
        
        elevation: 10,}}>
             <Icon style={{marginLeft:-370,marginTop:-180}} color='black' name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> 
            
            <View style={{marginTop:200}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,color:'black'}}>Applied Job Details :</Text>
            {/* <View style={{flexDirection:'row',marginTop:20}}>
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
            </View> */}



<View style={styles.userInfoSection}>
<View style={styles.row}>
            <Icon1 name='account-circle' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.name}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='notebook' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.jobtitle}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='email' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.email}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='office-building' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.companyname}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='book-open' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.jobtype}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='currency-usd' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.salary}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='expansion-card' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.description}</Text>
            </View>
            <View style={styles.row}>
            <Icon1 name='map-marker-radius' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{job.location}</Text>
            </View>
</View>
            </View>













           
    </View>
    
    )
}

export default JobView
const styles=StyleSheet.create({
    container: {
        flex: 1,
      },
      userInfoSection: {
          
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
          marginTop:10,
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
})