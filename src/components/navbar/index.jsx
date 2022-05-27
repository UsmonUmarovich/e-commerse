import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar position='static'>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Typography variant='h5'>
                    3-COM
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar