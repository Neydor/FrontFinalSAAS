import React, {useState} from 'react';
import {Container, Typography, Grid, TextField, Button} from '@material-ui/core';
import style from '../Tool/Style';
import {  registrarSede } from '../../actions/SedeAction';

const RegistrarSede = () => {
    const [sede, setSede] = useState({
        nombre_sede : '',
        estado : 0,
        latitud : 0.0,
        longitud : 0.0,
        ciudad: 0,
        usuario: 0,
    })

    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
            //NombreCompleto : 'vaxi drez'
        }))
    }

    const registrarSedeBoton =  e => {
        e.preventDefault();
        
        registrarSede(Sede).then(response => {
            console.log('se registro exitosamente la sede', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        });

    }

    return(
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Sede
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                        <Grid item xs={12} md={6}>
                            <TextField name="estado" value={sede.estado} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Estado de la sede" />
                        </Grid>
                            <TextField name="nombre_sede" value={sede.nombre_sede} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese nombre de la sede" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="latitud" value={sede.latitud} onChange={ingresarValoresMemoria}  variant="outlined" fullWidth label="Ingrese su latitud" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="longitud" value={sede.longitud} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese su longitud" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="ciudad" value={sede.ciudad} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese la ciudad" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="usuario" value={sede.usuario} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese su usuario" />
                        </Grid>
                        
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button type="submit" onClick={registrarSedeBoton} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarSede;