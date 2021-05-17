import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
//import {Card, CardAction,CardButton,CardTitle,CardContent} from "react-native-cards-custom"
const DetailScreen=({navigation,route})=> {
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
<SafeAreaView style={{ flex: 1, 
           backgroundColor: 'white'}}>

 <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
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
             height: 12,
           },
           shadowOpacity: 0.58,
           shadowRadius: 16.00,
           
           elevation: 24,
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
        <View style={{backgroundColor:'purple', height:50,borderRadius:10,
         alignItems:'center',flexDirection:'row',}}>
 {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' />  */}
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Job Details</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
            <View style={{marginLeft:30,}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>jobtitle : {plant.jobtitle} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>company Name : {plant.companyname}</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>description : {plant.description} </Text>
            
            <Text style={{fontSize:16,fontWeight:'bold'}}>email : {plant.email} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>salary : {plant.salary} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>JobType : {plant.jobtype} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>location : {plant.location} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>vecancies : {plant.persons} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>experience : {plant.exp} </Text>
            
            </View >
            <View style={{marginLeft:200,marginRight:50}}>
            <Button title='apply' color="#841584" onPress={()=>navigation.navigate('Apply',plant)}></Button>
            </View>
        </View>
        </View>
        </SafeAreaView>
    )
}

export default DetailScreen
