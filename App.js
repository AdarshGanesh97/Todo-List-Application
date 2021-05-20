import React,{useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TaskComponent from './src/components/TaskComponent';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasks} />
      <Text style={styles.sectionTitle}>Today's Task</Text>

      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <TaskComponent text={item} />
              </TouchableOpacity>
            )

          })
        }

      </View>

      <TextInput style={styles.input} placeholder={'Enter a Task'} value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.add}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },

  tasks: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"center"
  },

  items: {
    marginTop: 30
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    marginHorizontal:50
  },

  add: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal:150
  }
});
