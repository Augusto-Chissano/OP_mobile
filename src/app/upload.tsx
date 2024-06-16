import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import { Link } from "expo-router"
import { AntDesign } from "@expo/vector-icons"

export default function Upload() {
     return (
          <>
               <StatusBar barStyle={"dark-content"} hidden />
               <View style={styleSheet.container}>
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

                    <Text style={styleSheet.title}>Enviar uma foto</Text>

                    <View style={styleSheet.containerActions}>
                         <View>
                              <TouchableOpacity style={styleSheet.button}>
                                   <AntDesign name="camera" size={60} color="white" />
                              </TouchableOpacity>
                              <Text style={styleSheet.labels}>
                                   Tirar uma foto
                              </Text>
                         </View>

                         <View>
                              <TouchableOpacity style={styleSheet.button}>
                                   <AntDesign name="picture" size={60} color="white" />
                              </TouchableOpacity>
                              <Text style={styleSheet.labels}>
                                   Escolher da galeria
                              </Text>
                         </View>
                    </View>
               </View>
          </>
     )
}


const styleSheet = StyleSheet.create({
     container: {
          marginTop: 30,
          backgroundColor: "#fff",
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: 40
     },
     title: {
          fontSize: 25,
          fontWeight: "bold"
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
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'rgb(244 63 94)',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginBottom: 15
     },
     labels: {
          textAlign: "center",
          fontSize: 15
     }
})

/*
  BLUE: #00A0FF
  WHITE: #F5F4F8

*/