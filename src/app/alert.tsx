import {
     View,
     Text,
     StyleSheet,
     StatusBar,
     TouchableOpacity,
     TextInput,
     ScrollView
} from "react-native"
import { Link } from "expo-router"
import { useState } from "react"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';

export default function Search() {
     const [nome, setNome] = useState('');
     const [genero, setGenero] = useState('');
     const [idade, setIdade] = useState('');

     const buscar = () => {
          // Lógica para buscar com os dados inseridos
          console.warn(nome)
          console.log('Buscando...');
     };

     return (
          <>
               <StatusBar barStyle={"dark-content"} hidden />
               <View style={styles.container}>
                    <View style={{
                         width: "100%",
                         alignItems: "flex-end",
                         marginRight: 80
                    }}>
                         <Link href="/">
                              <AntDesign name="left" size={15} color="rgb(244 63 94)" />
                              <Text style={{ fontSize: 17 }}>Voltar</Text>
                         </Link>
                    </View>

                    <Text style={styles.title}>Enviar informações</Text>
                    <Text style={styles.text}>Antes de finalizar, precisamos dos dados abaixo.</Text>

                    <View style={styles.form}>
                         <TextInput
                              style={styles.input}
                              placeholder="Nome"
                              value={nome}
                              onChangeText={setNome}
                         />
                         <TextInput
                              style={styles.input}
                              keyboardType="email-address"
                              placeholder="Email"
                              value={genero}
                              onChangeText={setGenero}
                         />
                         <TextInput
                              style={styles.input}
                              placeholder="Local do encontro/comentários"
                              value={idade}
                              onChangeText={setIdade}
                         />
                         <View style={{ alignItems: "center", flexDirection: "row", marginBottom: 20 }}>
                              <Entypo name="location-pin" size={100} color="lightblue" style={{ marginRight: 10 }} />
                              <View>
                                   <Text style={{ textAlign: "center", fontWeight: "bold" }}>Estamos a enviar</Text>
                                   <Text style={{ textAlign: "center", fontWeight: "bold" }}>também sua</Text>
                                   <Text style={{ textAlign: "center", fontWeight: "bold" }}>localização via GPS</Text>
                              </View>
                         </View>

                         <View>
                              <Text style={{ textAlign: "center" }}>Isso vai nos ajudar na busca pela pessoa que voce reportou</Text>
                              <TouchableOpacity style={styles.button} onPress={buscar}>
                                   <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Enviar</Text>
                              </TouchableOpacity>

                              <Link href="/confirmation">Confirmacao</Link>
                         </View>
                    </View>
               </View>
          </>
     )
}


const styles = StyleSheet.create({
     container: {
          marginTop: 30,
          backgroundColor: "#fff",
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: 10
     },
     form: {
          width: "100%",
          padding: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center"
     },
     containerActions: {
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          gap: 50
     },
     button: {
          marginTop: 10,
          backgroundColor: '#00A0FF',
          padding: 8,
          alignItems: 'center',
          borderRadius: 5,
     },
     text: {
          textAlign: "center",
          fontSize: 15
     },
     input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
     },
})

/*
  BLUE: #00A0FF
  WHITE: #F5F4F8

*/