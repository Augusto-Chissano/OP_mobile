import { View, Text, StyleSheet, Image } from "react-native"

import { Button } from "@/components/button"

export default function Home() {
     return (
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
                    <Button title="Enviar uma foto da pessoa" />
                    <Button title="Informar as características" />
               </View> 
          </View>
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
     }
})

/*
  BLUE: #00A0FF
  WHITE: #F5F4F8

*/