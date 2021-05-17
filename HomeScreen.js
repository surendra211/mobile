import React, { useState } from 'react'
import { Alert, Modal,TouchableHighlight,View,Button, Text, StyleSheet, SafeAreaView, TextInput, Dimensions, FlatList, VirtualizedList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axiosInstance from '../helpers/axios'
import ShowJobs from './ShowJobs';
//import axios from "axios"

//import {Card, CardAction,CardButton,CardTitle} from "react-native-cards-custom"
//import { Header } from 'react-native/Libraries/NewAppScreen';
//import Header from "./Header"
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import MenuItems from './MenuItems';
//import { signout } from '../actions/auth-actions';
const styles=StyleSheet.create({
    header:{
        marginTop:0,flexDirection:'row',
        justifyContent:'space-between'
    },
    searchContainer:{
        height:50,
        backgroundColor:'#F1F1F1',
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    sortBtn: { 
        marginLeft: 290, 
        height: 50, 
        width: 50, 
        backgroundColor:'green', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10
        } 
//     card:{
//         height: 225, backgroundColor: '#F1F1F1', 
//  width, marginHorizontal: 2, 
//  borderRadius: 10, marginBottom: 20, padding: 15, 

    
})

const HomeScreen=({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [ text, setText ] = useState('') 
    const [da,setDa]=useState([])
    const [skills,setSkills]=useState('')
    const [location,setLocation]=useState('')
    const dispatch=useDispatch()
    const getting=async()=>{
        if(skills==""||location==""){
            setText("please enter skills and location")
        }else{ 
        const c=skills.toLowerCase();
        const d=location.toLowerCase();
        const resp=await axiosInstance.get(`/findjob/${c}/${d}`)
        setDa(resp.data)
        }
    }
  
    console.log(da)
    return (
        
        <View style={{flex:1,
            backgroundColor:'white',marginLeft:0,
            marginRight:0}}>
            <View style={{backgroundColor:'purple', height:50,
            justifyContent:'space-between', alignItems:'center',flexDirection:'row',
            marginHorizontal:0,marginRight:0}}>
        <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:7,
       marginLeft:10}}>Job Application</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
     {/* <View style={styles.sortBtn}> */}
            {/* <Icon name='sort' style={{marginRight:15}} onPress={()=>navigation.navigate('Saved Jobs')}  */}
             {/* size={30} color='white' /> */}
            {/* </View> */}
            <View style={{marginRight:10}}>
            <MenuItems />
            </View>
    </View>
            <ScrollView >
                
             {/* <View style={{marginTop:20,flexDirection:'row', marginLeft:50}} >
             <Button onPress={()=>navigation.navigate('Saved Jobs')} title='Menu' /> 
            <View style={styles.sortBtn}>
            <Icon name='sort' onPress={()=>navigation.navigate('Saved Jobs')} 
             size={30} color='white' />
            </View> 
            </View> */}
            {/* <Button title='Saved jobs' onPress={()=>navigation.navigate('saved')} /> */}
            {/* <Button title='applied jobs' onPress={()=>navigation.navigate('Appliedjobs')} /> */}
           {/* <Button style={{marginLeft:20}} title='signin' onPress={()=>navigation.navigate('signin')} /> */}
            
            {/* <Button title="signout" onPress={()=>logout()} /> */}
            
        {/* <View style={styles.header}>
            <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>welcome to</Text>
            <Text style={{fontSize:38,fontWeight:'bold', color:'green'}}>Job Portal</Text>
            </View>
           
        </View> */}
        
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:50}}>
            
            <Text style={{fontSize:16,color:'green',marginBottom:20}}>Search jobs Here</Text>
                {/* <Icon name='search' size={28} style={{marginLeft:20}} /> */}
                <Text style={{color:'red'}}>{text}</Text>
                <TextInput style={{height: 50,width:250, backgroundColor:'#F1F1F1',marginRight:60,borderWidth:1,borderColor:'green',borderRadius:10,
                marginLeft:60}} placeholder=" Enter skills"
          onChangeText={text => setSkills(text)} defaultValue={skills} />
          <TextInput style={{height: 50,borderWidth:1,borderColor:'green',borderRadius:10, width:250,backgroundColor:'#F1F1F1',marginTop:2,marginLeft:60,
          marginRight:60, marginTop:20, marginBottom:10}} placeholder=" Enter Location"
          onChangeText={text => setLocation(text)} defaultValue={location} />
<View style={{marginBottom:10,marginTop:10}}>
<Button onPress={()=>getting()} title='search jobs'/>

</View>
{/*  
<Card>
<CardTitle
      subtitle="Number 6"
    />
<CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Share"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction>
// </Card> */}
            
        </View>
        
        <FlatList columnWrapperStyle=
        
        {{justifyContent:'space-between'}}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{marginTop:10,paddingBottom:0}}
            
            data={da} numColumns={2} 
            renderItem={({item}) => { 
            return <ShowJobs plant={item} navigation={navigation} />
            }}
        />



{/* <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View> */}
 </ScrollView>

 
        </View>

    )
}

export default HomeScreen
