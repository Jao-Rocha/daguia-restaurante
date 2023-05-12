import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { brown, black } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: brown[600]
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Dáguia
            </Typography>
            <Button color="inherit">
              <Link href="/">Inicio</Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact">Contato</Link>
            </Button>
            <Button color="inherit">
              <Link href="/job">Trabalhe Conosco</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}
