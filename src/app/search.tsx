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

export default function Search() {
     const [nome, setNome] = useState('');
     const [genero, setGenero] = useState('');
     const [idade, setIdade] = useState('');
     const [racaCor, setRacaCor] = useState('');
     const [tipoCabelo, setTipoCabelo] = useState('');
     const [corCabelo, setCorCabelo] = useState('');
     const [corOlhos, setCorOlhos] = useState('');

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

                         <Text style={styles.title}>Informe as características da pessoa que você viu</Text>
                         <Text style={styles.text}>Indique as características que você sabe e deixe em branco as que não tem a certeza</Text>

                         <View style={styles.form}>
                              <TextInput
                                   style={styles.input}
                                   placeholder="Nome"
                                   value={nome}
                                   onChangeText={setNome}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Gênero"
                                   value={genero}
                                   onChangeText={setGenero}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Idade"
                                   value={idade}
                                   onChangeText={setIdade}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Raça/Cor"
                                   value={racaCor}
                                   onChangeText={setRacaCor}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Tipo de Cabelo"
                                   value={tipoCabelo}
                                   onChangeText={setTipoCabelo}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Cor do Cabelo"
                                   value={corCabelo}
                                   onChangeText={setCorCabelo}
                              />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Cor dos Olhos"
                                   value={corOlhos}
                                   onChangeText={setCorOlhos}
                              />
                              <TouchableOpacity style={styles.button} onPress={buscar}>
                                   <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Buscar</Text>
                              </TouchableOpacity>
                              <Link href={"/results"}>Resultados</Link>
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
          padding: 20
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