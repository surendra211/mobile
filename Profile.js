import React, { useEffect, useState } from 'react'
import { View, Text,Button, SafeAreaView,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import axiosInstance from '../helpers/axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Avatar,Title,Caption,TouchableRipple} from 'react-native-paper'





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




const Profile = ({navigation}) => {
const [view1,setView1]=useState([])
const [message,setMessage]=useState('')
const auth=useSelector(state=>state.auth1)


    useEffect(()=>{
        const profi=async()=>{
        if(auth.email1==''){
            setMessage('Please Signin Your Account you can see your Profile')
            }else{ 
        
            const resp=await axiosInstance.get(`/jobseekerdetails/${auth.email1}`)
            setView1(resp.data)
        }
        }
        profi()
    },[])
    console.log(auth.email1)
    console.log(view1)
    return (
        <>
<View style={{flexDirection:'row',marginTop:0, backgroundColor:'#009387',height:40,
             justifyContent:'space-between',marginBottom:10}}>
            <Icon name='arrow-left' size={28} color='white' style={{marginTop:5}}
            onPress={()=>navigation.goBack()}
            />
            <Icon name='account-edit' size={28} color='white' style={{marginTop:5}}
             onPress={()=>navigation.navigate('update',view1)} />
            </View>
        <SafeAreaView style={styles.userInfoSection}>
            
        <View style={{flexDirection: 'row', marginTop: -0}}>
          <Avatar.Image 
            source={require('../assets/1.jpg')} style={{height:70,width:'auto'}}
            size={70}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{view1.fullname}</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>

        <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <Icon name='map-marker-radius' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.location}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='phone' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.phone}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='email' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.email}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='book' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.qualification}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='book-open' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.stream}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='seat-individual-suite' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.skills}</Text>
            </View>
            <View style={styles.row}>
            <Icon name='expansion-card' color='#777777' size={20} />
            <Text style={{color:'#777777',marginLeft:20}}>{view1.exp}</Text>
            </View>
            
            
        </View>


        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox,{borderRightColor:'#dddddd',
        borderRightWidth:1}]}>
                <Title>14</Title>
                <Caption>Saved Jobs</Caption>

            </View>
            <View style={styles.infoBox}>
                <Title>10</Title>
                <Caption>Applied Jobs</Caption>

            </View>
        </View>


        <View style={styles.menuWrapper}>
            <TouchableRipple>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color='#FF6347' size={25} style={{marginTop:5}} />
                <Text style={styles.menuItemText}>your favourites</Text>
                </View>
            </TouchableRipple>

            <Text style={{color:'red'}}>{message}</Text>
        </View>
      </SafeAreaView>



</>
)
}

export default Profile




















//         <SafeAreaView style={{ flex: 1, 
//             backgroundColor: 'white'}}>
//         <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
//  <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
//         <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
//        marginLeft:10}}>Profile</Text>
//        {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
//              onPress={()=>navigation.navigate('signin')}>signin</Text> */}
//     </View>
//         <View style={{ backgroundColor:'#F1F1F1'}}>
  
              
//              <View style={{ backgroundColor:'white',marginTop:50,marginHorizontal:10,borderRadius:10,
//            shadowColor: "#000",
//            shadowOffset: {
//              width: 0,
//              height: 12,
//            },
//            shadowOpacity: 0.58,
//            shadowRadius: 16.00,
           
//            elevation: 24,
//             //  shadowColor: '#000',
//             //  shadowOffset: { width: 0, height: 1 },
//             //  shadowOpacity: 0.8,
//             //  shadowRadius: 1,  
//         //      borderColor:'yourchoice', // if you need 
//         //      borderWidth:1, overflow: 'hidden',
//         // shadowColor: 'green',
//         // shadowRadius: 10,
//         // shadowOpacity: 1,
//             }}>
//         <View style={{backgroundColor:'purple', height:50,borderRadius:10,
//          alignItems:'center',flexDirection:'row',}}>
//  {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' />  */}
//         <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
//        marginLeft:10}}>check your Details</Text>
//        {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
//              onPress={()=>navigation.navigate('signin')}>signin</Text> */}
//     </View>
//             <View style={{marginLeft:30,}}>
//             <Text style={{fontSize:16,fontWeight:'bold',}}>Name: {view1.fullname} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>Email : {view1.email}</Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>phone : {view1.phone} </Text>
            
//             <Text style={{fontSize:16,fontWeight:'bold'}}>Qualification : {view1.qualification} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>Stream : {view1.stream} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>Experience : {view1.exp} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>Skills : {view1.skills} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>location : {view1.location} </Text>
//             <Text style={{fontSize:16,fontWeight:'bold'}}>UpdatedAt : {view1.updatedAt} </Text>
            
//             </View >
//             <View style={{marginLeft:200,marginRight:50}}>
//             <Button title='edit' color="#841584" onPress={()=>navigation.navigate('update',view1)}></Button>
//             </View>
//         </View>
//         </View>
//         <View style={{marginTop:60,marginLeft:30}}>
//             <Text style={{color:'red'}}>{message}</Text>
//         </View>
//         </SafeAreaView>
 
