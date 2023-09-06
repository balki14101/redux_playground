import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)

  
  function decrementCount() {
    setCount(count-1)
  }
  function incrementCount() {
    setCount(count+1)
  }

  return (
    <View style={styles.container}>
    <Button
      title="increment"
      onPress={() => incrementCount()}
    />
    <Text>{count}</Text>
    <Button
      title="decrement"
      onPress={() =>decrementCount()}
    />
  </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});