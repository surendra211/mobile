import React from 'react'
import { View, Text,Dimensions,StyleSheet,TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialIcons'
const BeforeSignin = ({navigation,k}) => {
  let s1={message:''}
    return (
        <View style={styles.container}>
            <Icon name='arrow-back' size={25} color='white'
            onPress={()=>navigation.navigate('Details')}
            />
        <View style={styles.header}>
          <Animatable.Image
          animation='bounceIn'
          duration={1500}
          source={require('../assets/1.jpg')} 
          style={styles.logo}
          resizeMode='stretch' />
        
        </View>
        <Animatable.View style={styles.footer}
        animation='fadeInUpBig'
        >
        <Text>footer</Text>
        <Text style={styles.title}>Sign In with Account</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('signin',s1)}>
          <LinearGradient
          colors={['#08d4c4', '#01ab9d']}
          style={styles.signIn}
          >
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons  name='navigate-next' color='#fff'
            size={20}/>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        </Animatable.View>
      </View>
    )
}

export default BeforeSignin
const {height}=Dimensions.get('screen')
const height_logo=height-600;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#009387'
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
  },
  logo:{
    width:height_logo,
    height:height_logo,
    borderRadius:20
  },
  title:{
    color:'#05375a',
    fontSize:30,
    fontWeight:'bold',
  },
  text:{
    color:'gray',
    marginTop:5
  },
  button:{
    alignItems:'flex-end',
    marginTop:30
  },
  signIn:{
    width:150,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    flexDirection:'row'
  },
  textSign:{
    color:'white',
    fontWeight:'bold'
  }

})