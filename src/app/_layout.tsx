import "../styles/global.css"

import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Loading } from "../components/loading"


export default function Layout() {
     return (
          <>
               <StatusBar style="dark" />
               { !(1 == 1) ? <Loading /> : <Slot />}
          </>
     )
} 