import React from 'react'
import Rn from 'react-native'
import { socket } from '../services/Socket'

export function Create() {
  const [title, setTitle] = React.useState('')

  function handleOnSubmit() {
    if (title.length > 0) {
      socket.emit('create', { title, completed: false })

      setTitle('')
    }
  }

  return (
    <Rn.View style={styles.container}>
      <Rn.TextInput value={title} onChangeText={setTitle} style={styles.input} />

      <Rn.TouchableOpacity style={styles.button} onPress={handleOnSubmit} activeOpacity={0.8}>
        <Rn.Text style={styles.textButton}>Enviar</Rn.Text>
      </Rn.TouchableOpacity>
    </Rn.View>
  )
}

const styles = Rn.StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 10,
    borderRadius: 4,
    fontSize: 16
  },
  button: {
    height: 40,
    backgroundColor: '#0097a7',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
