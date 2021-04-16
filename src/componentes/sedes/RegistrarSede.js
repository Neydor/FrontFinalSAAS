import React, { useState } from 'react';
import {  Container,
    Typography,
    Grid,
    TextField,
    Button,
    InputLabel,
    Select, MenuItem } from '@material-ui/core';
import style from '../Tool/Style';
import { registrarSede } from '../../actions/SedeAction';

const RegistrarSede = (props) => {
    const [sede, setSede] = useState({
        nombre_sede: '',
        estado: '',
        latitud: '',
        longitud: '',
        ciudad: '',
        usuario: 1,
    })

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setSede(anterior => ({
            ...anterior,
            [name]: value
            //NombreCompleto : 'vaxi drez'
        }))
    }

    const registrarSedeBoton = e => {
        e.preventDefault();

        registrarSede(sede).then(response => {
            console.log('se registro exitosamente la sede', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
            props.history.push("/");
        });

    }

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Sede
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                            <TextField name="longitud" value={sede.longitud} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese su longitud" />
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <TextField name="latitud" value={sede.latitud} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese su latitud" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="label-ciudad">Ciudad</InputLabel>
                            <Select fullWidth
                                labelId="label-ciudad"
                                id="ciudad_select"
                                value={sede.ciudad}
                                name="ciudad"
                                variant="filled"
                                onChange={ingresarValoresMemoria}
                            >
                                <MenuItem value={1}>Tulua</MenuItem>
                                <MenuItem value={2}>Cali</MenuItem>
                                <MenuItem value={3}>Cartago</MenuItem>
                                <MenuItem value={4}>Buenaventura</MenuItem>
                                <MenuItem value={5}>buga</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="label-estado">Estado</InputLabel>
                            <Select fullWidth
                                labelId="label-estado"
                                id="estado_select"
                                value={sede.estado}
                                name="estado"
                                variant="filled"
                                onChange={ingresarValoresMemoria}
                            >
                                <MenuItem value={1}>Válido</MenuItem>
                                <MenuItem value={2}>Inválido</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombre_sede" value={sede.nombre_sede} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese nombre de la sede" />
                        </Grid>
                        
                        <Grid item xs={12} md={6} style={style.esconder}>
                            <TextField name="usuario" value={sede.usuario} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese su usuario" />
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
            </div >
        </Container >
    );
}

export default RegistrarSede;