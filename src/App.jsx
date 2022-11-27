import '@/styles/index.css'
import { Box, Button } from '@mui/material'

function App() {
  return (
    <Box component='main'>
      <h1>Hello World!</h1>
      <Button variant='contained'>Hello World</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
    </Box>
  )
}

export default App
