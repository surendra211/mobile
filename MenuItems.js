import React,{ useRef} from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/MaterialIcons'
 const MenuItems=()=>  {

        const navigation = useNavigation();
    const menu = useRef();

  const hideMenu = () =>{ 
      
   // const navigation = useNavigation();
    //menu.current.
      // return [navigation.navigate("Home")]
    
   
    //return [navigation.navigate("Saved Jobs")]
   // menu.current.hide();}
  }
  const showMenu = () => menu.current.show();

//   _menu =null;

//   const setMenuRef =ref => {
// //     //this._menu = ref;
//      _menu=ref;
//    };
//    const showMenu = () => {
//      _menu.show();
//    };

//  const hideMenu = () => {
//     // console.log(navigation)
//     // return [navigation.navigate("Saved Jobs")]
//       _menu.hide();
//     return<>
//     <View>
//         <Text>Hello</Text>
//     </View>
//     </>
//   };
 //}


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Menu style={{borderColor:'purple',borderWidth:2,marginTop:40,marginLeft:0}}
         ref={menu}
          button={<Icon name='sort' size={28} color='white' onPress={showMenu}></Icon>}
        >
          <MenuItem onPress={()=>navigation.navigate('Saved Jobs')}>SavedJobs</MenuItem>
          <MenuDivider />

          <MenuItem onPress={()=>navigation.navigate('profile')}>Profile</MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>navigation.navigate('signin')} disabled>
            {/* //disabled> */}
            SignIn
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>navigation.navigate('logout')}>LogOut</MenuItem>
        </Menu>
      </View>
    );
  }


export default MenuItems