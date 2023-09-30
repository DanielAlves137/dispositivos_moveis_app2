import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
    areaContador: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
    areaBotao:{
      flex: 2,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      color: 'orange',
      fontSize: 30,
      fontWeight: 'bold',
    },
    text: {
      color: 'black',
      fontSize: 98,
      fontWeight: 'bold',
      borderWidth: 10,
      borderRadius: 15,
      paddingLeft: 20,
    },
    botaoMais:{
      width: 300,
      height: 50,
      margin: 2,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lime',
    },
    botaoMenos:{
      width: 300,
      height: 50,
      margin: 2,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
    },
  
});

export { styles }