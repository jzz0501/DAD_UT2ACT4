import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/storelogin";

export default function Navbar(props) {

    const dispatch = useDispatch()

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2} md={2} lg={2}>
                            <Typography variant="h6">{props.username}</Typography>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                            <Typography variant="h6">Inicio</Typography>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                            <Typography variant="h6">Informes</Typography>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                            <Typography variant="h6">Ayuda</Typography>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                            <Button variant="contained" onClick={() => {
                                dispatch(loginActions.logout())
                            }}>Salir</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}