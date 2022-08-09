import Rn from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { socket } from '../services/Socket'
import { Toast } from '../utils/Toast'

interface UpdateProps {
  id: string
  title: string
  completed: boolean
}

export function Update({ id, title, completed }: UpdateProps) {
  function handleUpdateTodo(id: string, title: string, completed: boolean) {
    Toast('Todo accepted')

    socket.emit('update', { id, payload: { title, completed } })
  }

  return (
    !completed && (
      <Rn.View style={styles.container}>
        <Rn.Text style={styles.title} >{title}</Rn.Text>

        <Rn.TouchableOpacity activeOpacity={1} onPress={() => handleUpdateTodo(id, title, !completed)} >
          <Icon name='check' color='#c9c9c9' size={20} />
        </Rn.TouchableOpacity>
      </Rn.View>
    )
  )
}

const styles = Rn.StyleSheet.create({
  container: {
    backgroundColor: '#263238',
    padding: 10,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 50
  },
  containerDisabled: {
    padding: 10,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 50
  },
  title: {
    color: '#c9c9c9',
    fontSize: 16
  }
})
