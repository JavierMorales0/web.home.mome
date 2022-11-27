import { createTheme } from '@mui/material/styles'
import { red, blue } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: red,
    secondary: blue,
    error: {
      main: red.A400
    }
  }
})

export default theme
