import { Text, View , SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [counter, setCounter] = useState(0)

  function Incrementar(){
    setCounter( (prevCounter) => prevCounter + 1 )
  }

  function Decrementar(){
    if ( counter > 0 ) setCounter( (prevCounter) => prevCounter - 1 )
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.areaContador}>
        <Text style={styles.text}>{counter}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.areaBotao}>
        <TouchableOpacity style={styles.botaoMais} onPress={Incrementar}>
          <AntDesign name="plus" size={48} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoMenos} onPress={Decrementar}>
          <AntDesign name="minus" size={48} color="darkred" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}