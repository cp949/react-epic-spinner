import React from 'react'
import * as Spinners from '@cp949/react-epic-spinner'
import { Box, Container, Grid, Typography } from '@mui/material'

function isSpinnerComponent(a: any) {
    const nm = a['name']
    if (typeof nm !== 'string') return false
    return nm.endsWith('Spinner')
}

const components = Object.values(Spinners).filter(isSpinnerComponent)

export default function App() {
    return (
        <Box sx={{ background: '#fff', minHeight: '100vh', py: 5 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ textAlign: 'center', mt: 2, mb: 5 }}>
                    React Epic Spinners
                </Typography>
                <Grid container>
                    {components.map((Comp, i) => (
                        <Grid item key={i} xs={6} sm={4} md={3}>
                            <Box
                                className="App-spinnerWrapper"
                                sx={{
                                    width: '100%',
                                    height: 200,
                                    backgroundColor: 'rgba(0,0,0,0.04)',
                                    display: 'flex',
                                    pt: 6,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box sx={{ m: 'auto' }}>
                                    <Comp />
                                </Box>
                                <Box
                                    sx={{
                                        py: 1,
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    {Comp.name}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
