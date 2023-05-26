import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
      myPrimary: '#964b00 ' //  cor primária personalizada
    },
    secondary: {
      main: '#dc3545',
      mySecondary: '#00ff00' //  cor secundária personalizada
    }
  }
})

export default theme
