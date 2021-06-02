import React, { useState } from 'react'
import { Alert, Modal,TouchableOpacity,Switch, View,Button, Text, StyleSheet, SafeAreaView, TextInput, Dimensions, FlatList, VirtualizedList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axiosInstance from '../helpers/axios'
import ShowJobs from './ShowJobs';
import * as Animatable from 'react-native-animatable'
//import axios from "axios"

//import {Card, CardAction,CardButton,CardTitle} from "react-native-cards-custom"
//import { Header } from 'react-native/Libraries/NewAppScreen';
//import Header from "./Header"
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import MenuItems from './MenuItems';
import Dropdown from './Dropdown';

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
        } ,
        jj:{
          marginLeft:0,
          height:250,
          width:500
        }
//     card:{
//         height: 225, backgroundColor: '#F1F1F1', 
//  width, marginHorizontal: 2, 
//  borderRadius: 10, marginBottom: 20, padding: 15, 

    
})

const HomeScreen=({navigation})=>{

 
  const [dataSource]=useState(['java','java developer','react','.net','python',])
  const [loca]=useState(['hyderabad','banglore','chennai','mumbai',])
  //const [location]=useState(['hyderabad','banglore','chennai','mumbai','delhi'])
  const [filtered,setFiltered]=useState([])
  const [filtered1,setFiltered1]=useState([])
  const [searching,setIsSearching]=useState(false)
  
    const [modalVisible, setModalVisible] = useState(false);
    const [ text, setText ] = useState('') 
    const [message,setMessage]=useState('')
    const [da,setDa]=useState([])
    const [skills,setSkills]=useState('')
    const [location,setLocation]=useState('')
    const dispatch=useDispatch()


    const getting=async()=>{
        if(skills==""||location==""){
            setText("please enter skills and location")
        }else{ 
         // console.log("location",location)
        const c=skills.toLowerCase();
        const d=location.toLowerCase();
        const resp=await axiosInstance.get(`/findjob/${c}/${d}`)
       // setDa(resp.data)
        //console.log('daoj')
        if(resp.data.message){
          console.log('if')
          setMessage('No Jobs Found')
        }else{
          console.log('else')
          setMessage('')
          setDa(resp.data)
        }
        }
    }
   
    
    const onSearching=(text)=>{
      let tempList=[]
      let temp=text.toLowerCase()
      if(text){
        //setSkills(text)
      setIsSearching(true)
      
        //const tempList=[]
        tempList=dataSource.sort().filter((e)=>e.toLowerCase().includes(temp))
       
      
       setFiltered(tempList)
       setSkills(tempList)
       }else{
         setIsSearching(false)
        setFiltered(tempList)
      }
    }
    const onSearching1=(text)=>{
      let tempList=[]
      let temp=text.toLowerCase()
      if(text){
        //setSkills(text)
      setIsSearching(true)
      
        //const tempList=[]
        tempList=loca.sort().filter((e)=>e.toLowerCase().includes(temp))
       
      
       setFiltered1(tempList)
       setLocation(tempList)
       }else{
         setIsSearching(false)
        setFiltered1(tempList)
      }
    }
    const j=(d)=>{
      //let k='';
    console.log(d)
      setSkills(d)
      setFiltered([''])
      //console.log(d)
    }
    const j1=(d)=>{
      //let k='';
    console.log(d)
      setLocation(d)
      setFiltered1([''])
      //console.log(d)
    }
  
    const hel=()=>{
      if(filtered===0 && filtered!==""){
        return ""
      }else{
        return( 
          <View>
          {filtered.map((item,id)=>(
          <View key={id}>
          <Text onPress={()=>j(item)} >{item}</Text>
          {/* <Text>-------------</Text> */}
          </View>
      ) 
      )}
      </View>
      )
      }
     }
     const hel1=()=>{
      if(filtered1===0 && filtered1!==""){
        return ""
      }else{
        return( 
          <View>
          {filtered1.map((item,id)=>(
          <View key={id}>
          <Text onPress={()=>j1(item)} >{item}</Text>
          {/* <Text>-------------</Text> */}
          </View>
      ) 
      )}
      </View>
      )
      }
     }
  
    console.log(da)
    return (
        
        <View style={{flex:1,
            backgroundColor:'white',marginLeft:0,
            marginRight:0}}>
            <View style={{backgroundColor:'#009387', height:50,
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
            {/* <TouchableOpacity onPress={()=>toggle()}>
            <View pointerEvents='none' style={{marginTop:10}}>
          <Switch value={isDarktheme} />
          </View>
          </TouchableOpacity> */}
                <View style={{marginTop:20}}>
                  {/* <Text style={{fontSize:20,color:'purple',marginLeft:60}}> Welcome to Job Application</Text> */}
                </View>
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
        <Animatable.View animation='fadeInDownBig'>
          <Image source={require('../assets/home.jpg')} style={styles.jj} />

        </Animatable.View>
        
            <Animatable.View animation='fadeInDownBig'
             style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:10,
             marginLeft:50, backgroundColor:'#009387',width:300,borderRadius:20}}>
            
            <Text style={{fontSize:16,color:'white',marginBottom:20}}>Search jobs Here</Text>
                {/* <Icon name='search' size={28} style={{marginLeft:20}} /> */}
                <Text style={{color:'red'}}>{text}</Text>
                <TextInput style={{height: 50,overflow:'hidden', 
                width:250, backgroundColor:'#F1F1F1',marginRight:60,
                borderWidth:1,borderColor:'green',borderRadius:10,
                marginLeft:60}} placeholder=" Enter skills"
          onChangeText={text=>setSkills(text)} defaultValue={skills} />
          {/* {[text => onSearching(text)],text=>setSkills(text)}  */}

<Text style={{position:'relative'}}>{hel()}</Text>
        

          <TextInput style={{height: 50,borderWidth:1,borderColor:'green',borderRadius:10, width:250,backgroundColor:'#F1F1F1',marginTop:2,marginLeft:60,
          marginRight:60, marginTop:20, marginBottom:10}} placeholder=" Enter Location"
          onChangeText={text=>setLocation(text)} defaultValue={location} />
             {/* [text => onSearching1(text)],text=>setLocation(text)} defaultValue={location} /> */}
<View style={{marginBottom:10,marginTop:10,}}>
<Button onPress={()=>getting()} title='search jobs' color='orange'/>
<Text style={{position:'relative'}}>{hel1()}</Text>
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
            
        </Animatable.View>
        <View>
  <Text style={{color:'red',fontSize:17,marginLeft:140,marginTop:10}}>{message}</Text>
</View>
        <FlatList columnWrapperStyle=        
        {{justifyContent:'center',flex:1, flexDirection:'column',}}
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
