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
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';

export default function Confirmation() {
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

                    <AntDesign name="checkcircleo" size={100} color="black" />

                    <Text style={styles.title}>Obrigado</Text>

                    <Text style={{ textAlign: "center" }}>Sua informação é muito importante para que possamos encontrar a pessoa desaparecida</Text>

                    <Text style={{ textAlign: "center" }}>Se ainda assim quiser ligar:</Text>
                    <Text style={{ textAlign: "center" }}>83 364 6562</Text>

                    <Link href={"/"}
                         style={{
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
                    >Voltar para o inicio</Link>
               </View>
          </>
     )
}


const styles = StyleSheet.create({
     container: {
          marginTop: 30,
          padding: 10,
          backgroundColor: "#fff",
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: 20
     },
     form: {
          width: "100%",
          padding: 20,
     },
     title: {
          fontSize: 30,
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