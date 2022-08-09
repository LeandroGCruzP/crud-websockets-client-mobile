import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Rn from 'react-native'
import { Create } from './src/components/Create'
import { Update } from './src/components/Update'
import { socket } from './src/services/Socket'

interface TodoData {
  id: string
  title: string
  completed: boolean
}

export default function App() {
  const [ todos, setTodos ] = React.useState<TodoData[]>([])

  React.useEffect(() => {
    socket.on('connect', () => { console.log('I am connected'); socket.emit('list') })

    socket.on('disconnect', () => console.log('I am disconnected'))

    socket.on('list', res => setTodos(res))

    socket.on('create', res => setTodos(oldTodos => [...oldTodos, res]))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('list')
      socket.off('create')
    }
  }, [])

  return (
    <Rn.SafeAreaView style={styles.container} >
      <StatusBar style='auto' />

      <Rn.Text style={styles.title} >CRUD with Socket IO</Rn.Text>

      <Create />

      {todos.map(todo => (
        <Update key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </Rn.SafeAreaView>
  )
}

const styles = Rn.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black'
  },
  title: {
    color: '#c9c9c9',
    marginTop: 25,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
