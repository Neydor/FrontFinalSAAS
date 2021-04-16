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
import { consultarCurso,actualizarCurso } from '../../actions/CursoAction';

const ActualizarCursos = (props) => {
    const [curso, setCurso] = useState({
        id_curso:'',
        estado: '',
        codigo_curso:'',
        nombre_curso: '',
        descripcion_curso: '',
        creditos_curso:'',
        categoria_curso: ''
    })

    useEffect(() => {
        console.log("Entra a useEffect")
        consultarSede(2).then(response => {
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

    const subirCambiosCurso =  e => {
        e.preventDefault();
        
        actualizarCurso(curso.id_curso     ,curso).then(response => {
            console.log('se edito exitosamente el curso', response);
            props.history.push("/");
        });

    }
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Actualizar Curso
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField name="descripcion_curso" value={curso.descripcion_curso} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="estado" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="codigo_curso" value={curso.codigo_curso} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese el codigo del curso" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombre_curso" value={curso.nombre_curso} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese el nombre del curso" />    
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="label-estado">Estado</InputLabel>
                            <Select fullWidth
                                labelId="label-estado"
                                id="estado_select"
                                value={curso.estado}
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
                            <TextField name="creditos_curso" value={curso.creditos_curso} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Ingrese la cantidad de creditos" />
                        </Grid>

                        <Grid item xs={12} md={6} style={style.esconder}>
                            <TextField name="categoria_curso" value={curso.categoria_curso} onChange={ingresarValoresMemoria} variant="filled" fullWidth label="Elija una categoria" />
                        </Grid>

                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button type="submit" onClick={subirCambiosCurso} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Actualizar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div >
        </Container >
    );
}

export default ActualizarCursos;