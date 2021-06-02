import React from 'react'
import { View, Text, SafeAreaView, Button,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
//import {Card, CardAction,CardButton,CardTitle,CardContent} from "react-native-cards-custom"
const DetailScreen=({navigation,route})=> {
  const auth=useSelector(state=>state.auth1)
  const check=()=>{
    if(auth.authenticate){
      return [navigation.navigate('Apply',plant)]
    }else{
      return [navigation.navigate('beforesignin')]
    }
  }
    const plant=route.params;
    return (
      
        // <SafeAreaView style={{ 
        //     flex: 1, 
        //     backgroundColor: 'white'}} >
        //     <View>
        //          <Icon name="arrow-back" size={28} onPress={navigation.goBack()} />
               
        //     </View>
        //     <View>
        //     <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.jobtitle}</Text>
        //     </View>
        //     <View style={{paddingHorizontal: 20, marginTop: 10}}>
        //     <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
        //     <Text
        //     style={{ 
        //     color: 'grey', 
        //     fontSize: 16, 
        //     lineHeight: 22, 
        //     marginTop: 10, 
        //     }}>
        //     {plant.description}
        //     </Text>
        //     </View>
        //     </SafeAreaView>
        <ScrollView>
<SafeAreaView style={{ flex: 1, 
           backgroundColor: 'white'}}>

 <View style={{backgroundColor:'#009387', height:50, alignItems:'center',flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>DetailScreen</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>


               {/* <Card style={{marginBottom:450,marginTop:40}}>
               <Icon name="arrow-back" size={28} onPress={()=>navigation.navigate('Home')} /> 
<CardTitle style={{fontSize:25}}
      subtitle="Job Details"
    />
    
     <View style={{marginTop:-100,marginHorizontal:20}}>
     <Text style={{fontSize:16,fontWeight:'bold',}}>jobtitle : {plant.jobtitle} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>company Name : {plant.companyname}</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>description : {plant.description} </Text>
            
            <Text style={{fontSize:16,fontWeight:'bold'}}>email : {plant.email} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>salary : {plant.salary} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>JobType : {plant.jobtype} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>location : {plant.location} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>vecancies : {plant.persons} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>experience : {plant.exp} </Text>
            </View>    
<CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton style={{marginLeft:250}}
        onPress={() =>navigation.navigate('Apply',plant)}
        title="Apply"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="save"
        color="#FEB557"
      />
    </CardAction>
</Card> */}
<View style={{ backgroundColor:'#F1F1F1'}}>
  
              
             <View style={{ backgroundColor:'white',marginTop:50,marginHorizontal:10,borderRadius:10,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 92,
           },
           shadowOpacity: 0.58,
           shadowRadius: 16.00,
           
           elevation: 14,
            //  shadowColor: '#000',
            //  shadowOffset: { width: 0, height: 1 },
            //  shadowOpacity: 0.8,
            //  shadowRadius: 1,  
        //      borderColor:'yourchoice', // if you need 
        //      borderWidth:1, overflow: 'hidden',
        // shadowColor: 'green',
        // shadowRadius: 10,
        // shadowOpacity: 1,
            }}>
        <View style={{backgroundColor:'#08d4c4', height:50,borderRadius:10,
         alignItems:'center',flexDirection:'row',}}>
 {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' />  */}
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Job Details</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
            <View style={{marginLeft:30,}}>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:30}}>jobtitle : {plant.jobtitle} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>company Name : {plant.companyname}</Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>description : {plant.description} </Text>
            
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>email : {plant.email} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>salary : {plant.salary} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>JobType : {plant.jobtype} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>location : {plant.location} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>vecancies : {plant.persons} </Text>
            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10}}>experience : {plant.exp} </Text>
            
            </View >
            
        </View>
        </View>
        <View style={{marginLeft:0,marginRight:0,marginTop:288}}>
            <Button title='apply' color="#FF6347" onPress={()=>check()}></Button>
            </View>




            {/* <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <Icon name='map-marker-radius' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.location}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='phone' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.jobtitle}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='email' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.email}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='book' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.salary}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='book-open' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.jobtype}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='seat-individual-suite' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.companyname}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='expansion-card' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{plant.persons}</Text>
            </View>
            
            
        </View> */}



        </SafeAreaView>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
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
});