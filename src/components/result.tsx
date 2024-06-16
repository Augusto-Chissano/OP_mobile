import {
     Text,
     Image,
     View,
     TouchableOpacity,
     StyleSheet,
     TouchableOpacityProps
} from "react-native"
import { Link } from "expo-router"

type Props = TouchableOpacityProps & {
     foto: string,
     nome: string,
     semelhanca: number,
}

export default function Result({ foto, nome, semelhanca, onPress }: Props) {
     return (
          <View style={styles.container}>
               <Image source={require("@/assets/van.jpg")} style={styles.foto} />
               <Text style={styles.nome}>{nome}</Text>
               <Text style={styles.semelhanca}>Semelhança: {semelhanca}%</Text>
               <Link href={"/details"} style={styles.link}>Clique para ver mais</Link>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          marginBottom: 20,
     },
     foto: {
          height: 200,
          resizeMode: "contain"
     },
     nome: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 5,
     },
     semelhanca: {
          fontSize: 16,
          marginBottom: 5,
     },
     link: {
          color: 'blue',
     },
})