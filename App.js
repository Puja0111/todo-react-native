import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Task from './components/Task'


const App = () => {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      <View  style={styles.taskwrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      
      <View  style={styles.items}>
        {
          taskItems.map((item,index) =>{
            return(
              <TouchableOpacity key={index}   onPress={() => completeTask(index)}>
                  <Task text={item} /> 
            </TouchableOpacity>
            )
          })
        }
      
      </View >
      </View >
      <KeyboardAvoidingView 
      style={styles.WriteTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text =>setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white', 
  },
  taskwrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold', 
  },
  items:{
    marginTop:30
  },
  WriteTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'pink',
    borderColor:"black",
    borderRadius:60,
    borderWidth:1,
    width:250
   
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'pink',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"black",
    borderRadius:60,
    borderWidth:1,
  },
  
})