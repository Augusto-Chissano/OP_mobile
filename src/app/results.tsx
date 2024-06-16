import {
     View,
     Text,
     StyleSheet,
     StatusBar,
     FlatList
} from "react-native"
import { Link } from "expo-router"
import { useState } from "react"
import { AntDesign } from "@expo/vector-icons"

import Result from "@/components/result"


const data = [
     {
          id: 1,
          nome: "Augusto",
          foto: "...",
          semelhanca: 99
     },
     {
          id: 1,
          nome: "Augusto",
          foto: "...",
          semelhanca: 99
     },
]
export default function Results() {

     const buscar = () => {

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

                    <Text style={styles.title}>A pessoa que você viu se parece com uma destas abaixo?</Text>
                    <Text style={styles.text}>Selecione a pessoa que mais se parece com a que você encontrou</Text>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                         <Result nome="Van" foto="" semelhanca={99} style={{flex:1}}/>
                         <Result nome="Gogh" foto="" semelhanca={99} style={{flex:1}} />
                    </View>

                    <View style={styles.form}>
                         <Link href="/" style={{
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
                              Não se parece com nenhuma
                         </Link>
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
          gap: 10,
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
          padding: 10,
          alignItems: 'center',
          borderRadius: 5,
     },
     text: {
          textAlign: "center",
          fontSize: 15
     },
     contentContainer: {
          paddingHorizontal: 5,

     },
})

/*
  BLUE: #00A0FF
  WHITE: #F5F4F8

*/