import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

type Props = {
     title: string
}

export function Button({ title }: Props) {
     return (
          <TouchableOpacity className="font-bold" style={{
               width: "100%",
               height: 56,
               backgroundColor: "#00A0FF",
               alignItems: "center",
               justifyContent: "center",
               borderRadius: 10
          }}>
               <Text style={{
                    color: "white",
                    fontSize: 15,
                    lineHeight: 24,
                    fontWeight: 700,
                    fontFamily: "Roboto_700"
               }}>{ title }</Text>
          </TouchableOpacity>
     )
}
