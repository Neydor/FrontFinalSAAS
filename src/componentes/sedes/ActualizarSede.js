import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    InputLabel,
    Select, MenuItem
} from '@material-ui/core';
import style from '../Tool/Style';
import { consultarSede, actualizarSede } from '../../actions/SedeAction';

const ActualizarSede = (props) => {

    var entradaId = "";

    const [sede, setSede] = useState({
        id_sede: '',
        nombre_sede: '',
        estado: '',
        latitud: '',
        longitud: '',
        id_ciudad: '',
        id_usuario: 1,
        t001_usuarios_id_usuario: ''
    })

    useEffect(() => {
        entradaId= prompt("Ingrese el ID de la sede que quiere editar:", "");
        console.log("Entra a useEffect")
        consultarSede(entradaId).then(response => {
            console.log("Respuesta consulta Sede", response.data)
            // var respuesta = response.data;
            // respuesta.estado = String(respuesta.estado);
            // respuesta.id_ciudad = String(respuesta.id_ciudad);
            setSede(response.data[0])
        })
    }, [])

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setSede(anterior => ({
            ...anterior,
            [name]: value
        }))
    }

    const subirCambiosSede = e => {
        e.preventDefault();

        actualizarSede(entradaId, sede).then(response => {
            console.log('se edito exitosamente la sede', response);
            props.history.push("/");
        });

    }
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Actualizar sede
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
                                value={sede.id_ciudad}
                                name="id_ciudad"
                                variant="filled"
                                onChange={ingresarValoresMemoria}
                                defaultValue=""
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
                                defaultValue=""

                            >
                                <MenuItem value={1}>Válido</MenuItem>
                                <MenuItem value={2}>Inválido</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombre_sede" value={sede.nombre_sede} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese nombre de la sede" />
                        </Grid>

                        <Grid item xs={12} md={6} style={style.esconder}>
                            <TextField name="t001_usuarios_id_usuario" value={sede.t001_usuarios_id_usuario} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese su usuario" />
                        </Grid>

                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button type="submit" onClick={subirCambiosSede} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Actualizar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div >
        </Container >
    );
}

export default ActualizarSede;