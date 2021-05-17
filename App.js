//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StatusBar, View ,Text} from 'react-native'
import React from 'react'; 

import {  NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from "@react-navigation/stack"
import {createDrawerNavigator } from '@react-navigation/drawer'
//import COLORS from "./consts/colors"
import HomeScreen from './screens/HomeScreen'; 
import DetailScreen from './screens/DetailScreen'; 
import ApplyJob from './screens/ApplyJob';
import { Provider } from 'react-redux';
import store from './store';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AfterApply from './screens/AfterApply';
import Update from './screens/Update';
import AppliedJobs from './screens/AppliedJobs';
import JobView from './screens/JobView';
import AppHeader from './screens/AppHeader';
import SavedJobs from './screens/SavedJobs';
import Logout from './screens/Logout';
import SettingsTabs from './screens/settings/SettingScreen';
import MenuItems from './screens/MenuItems';
import Profile from './screens/Profile';
import Already from './screens/Already';
import CheckingAppliedOrNot from './screens/CheckingAppliedOrNot';
//import Sig from './screens/Sig';

const Drawer=createDrawerNavigator()

window.store=store
const Stack = createStackNavigator(); 
export default function App() {
    // const saved=()=>{
    //     return [navigation.navigate('saved')]
    // } 
 return ( 
     <Provider store={store}>
        
         {/* <View style={{backgroundColor:'purple',height:50,justifyContent:'space-between', alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:7,
            marginLeft:10}}>Job Application</Text>
           
         </View> */}
 <NavigationContainer>
     {/* <Drawer.Navigator >
     <Drawer.Screen name='saved' component={SavedJobs}/> 
     </Drawer.Navigator>  */}
    {/* <Drawer.Screen name='Details' component={DetailScreen} />
     <Drawer.Screen name='signin' component={SignIn} />
     <Drawer.Screen name="Apply" component={ApplyJob} />
     <Drawer.Screen name='signup' component={SignUp} />
     <Drawer.Screen name="after" component={AfterApply} />
 <Drawer.Screen name="update" component={Update} />
     <Drawer.Screen name='Appliedjobs' component={AppliedJobs} />
     </Drawer.Navigator> */}
  <StatusBar barStyle="dark-content" backgroundColor="red" />
 <Stack.Navigator screenOptions={{header:()=>null }}>
 <Stack.Screen name='Home' component={HomeScreen}/>
 <Stack.Screen name="Details" component={DetailScreen}/>
 <Stack.Screen name='Apply' component={ApplyJob} />
 <Stack.Screen name='signin' component={SignIn} />
 <Stack.Screen name='signup' component={SignUp} />
 <Stack.Screen name="after" component={AfterApply} />
 <Stack.Screen name="update" component={Update} />
 <Stack.Screen name='Appliedjobs' component={AppliedJobs} />
 <Stack.Screen name="View" component={JobView} />
 <Stack.Screen name="saved" component={SavedJobs} />
 <Stack.Screen name="logout" component={Logout} />
 <Stack.Screen name='profile' component={Profile} />
 <Stack.Screen name='already' component={Already} />
 <Stack.Screen name='checking' component={CheckingAppliedOrNot} />
 <Stack.Screen name="Saved Jobs" component={SettingsTabs}/>
 </Stack.Navigator> 
 </NavigationContainer>
 </Provider>
 ); 
} 