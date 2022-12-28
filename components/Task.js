import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{props.text}</Text>
        <View style={styles.circle}></View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    item:{
        backgroundColor:'pink',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
        
    },
    
    itemText:{
        maxWidth:'80%'
    },
    
    circle:{
        width:20,
        height:20,
        borderColor:"black",
        borderWidth:5,
        borderRadius:5,  
    }
})