import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({ 
    cateogryContainer: { 
    flexDirection: 'row', 
    marginTop: 30, 
    marginBottom: 20, 
    justifyContent: 'space-between'
    }, 
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'}, 
    categoryTextSelected: { 
    color:'green', 
    paddingBottom: 5, 
    borderBottomWidth: 2, 
    borderColor:'green', 
    } 
   }) 
const Header=()=> {
    const categories = ['HOME', 'JOBS', 'PROFILE', 'LOGOUT'] 
 const [categoryIndex, setCategoryIndex] = useState(0) 
    return (
        <View style={styles.cateogryContainer}>
 {categories.map((item, idx) => ( 
 <TouchableOpacity key={idx} activeOpacity={0.8} onPress={() => setCategoryIndex(idx)}>
 <Text style={[ 
 styles.categoryText, 
 categoryIndex == idx && styles.categoryTextSelected
 ]}>{item}</Text>
 </TouchableOpacity>
 ))} 
 
 </View>
    )
}
export default Header
