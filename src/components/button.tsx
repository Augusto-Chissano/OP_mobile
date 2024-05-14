import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "react-native";

type Props = TouchableOpacityProps & {
     title: string
}

export function Button({ title, ...rest }: Props) {
     return (
          <TouchableOpacity
               activeOpacity={0.7}
               style={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#00A0FF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
               }}
               {...rest}
          >
               <Text style={{
                    color: "white",
                    fontSize: 15,
                    lineHeight: 24,
                    fontWeight: 700,
               }}>{title}</Text>
          </TouchableOpacity>
     )
}
