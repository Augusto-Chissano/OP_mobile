import { View, Text, StyleSheet, Image, StatusBar } from "react-native"
import { useEffect, useState } from "react"
import { Link } from "expo-router"

export default function Home() {

     const [dados, setDados] = useState(null)

     const fetchData = async () => {
          try {
               const response = await fetch('http://192.168.43.8:3000/api')
               const data = await response.json()

               setDados(data)
          } catch (error) {
               console.error('Error fetching data', error)
          }
     }

     useEffect(() => {
          fetchData()
     }, [])

     return (
          <>
               <StatusBar barStyle={"dark-content"} />
               <View style={styleSheet.container}>
                    <Image
                         source={require("@/assets/logo.png")}
                         style={{
                              resizeMode: "contain",
                              height: 200,
                         }}
                    />

                    <View>
                         <Text style={styleSheet.title}>Bem-vindo ao Reconnect</Text>
                    </View>

                    <View>
                         <Text style={{
                              textAlign: "center",
                         }}>Você teve contacto com uma pessoa que parece perdida?</Text>
                    </View>

                    <View style={styleSheet.actions}>
                         <Link href="/upload" style={{
                              width: "100%",
                              height: 45,
                              backgroundColor: "#00A0FF",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 10,
                              textAlign: "center",
                              verticalAlign: "middle",
                              color: "white",
                              fontSize: 15,
                              fontWeight: "bold"
                         }}
                         >
                              Enviar uma foto da pessoa
                         </Link>
                         <Link href="/search" style={{
                              width: "100%",
                              height: 45,
                              backgroundColor: "#00A0FF",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 10,
                              textAlign: "center",
                              verticalAlign: "middle",
                              color: "white",
                              fontSize: 15,
                              fontWeight: "bold"
                         }}
                         >
                              Informar as características
                         </Link>
                    </View>
               </View>
          </>
     )
}



const styleSheet = StyleSheet.create({
     container: {
          backgroundColor: "#fff",
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 25
     },
     title: {
          fontSize: 25,
          fontWeight: "bold"
     },
     actions: {
          width: "95%",
          gap: 20
     },
})

/*
  BLUE: #00A0FF
  WHITE: #F5F4F8
  Augusto-Chissano
*/