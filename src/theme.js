// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles : {
    global : {
        body : {
            background : "rgb(7, 7, 51)",
            color : "white"
        }
    }
  },
})

export default theme