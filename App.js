import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

const App = () => {
const [counter, setCounter] = useState(0)

useEffect(() => {
 console.log("did mount")
}, [])

return(
  <SafeAreaView>
    <View>
      <Text>Merhaba Hafta 4</Text>
      <Text>{counter}</Text>
      <Button title="Güncelle" onPress={() => setCounter(counter +1)} />
    </View>
  </SafeAreaView>
);
};

export default App;