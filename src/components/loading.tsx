import { ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
     return (
          <ActivityIndicator style={styleSheet.style} />
     )
}



const styleSheet = StyleSheet.create({
     style: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F4F8",
          color: "#00A0FF"
     }
})

